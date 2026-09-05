// app component
import { useState } from "react";
import type { Activity } from "./types";

function App() {
  // state for the activity name
  const [activityName, setActivityName] = useState("");
  const [activities, setActivities] = useState<Activity[]>([]);

  return (
    <div>
      <h1>Decision Dashboard</h1>
      <p>What should I do?</p>

    <input
      type="text"
      placeholder="Enter an activity"
      value={activityName}
      onChange={(event) => setActivityName(event.target.value)}
    />
    <button
  onClick={() => {
    if (activityName.trim() === "") {
      return;
    }

    const newActivity: Activity = {
      id: Date.now(),
      name: activityName,
      enjoyment: 5,
      productivity: 5,
      cost: 5,
      time: 5,
      energy: 5,
    };

    setActivities([...activities, newActivity]);
    
    // clear input field after adding activity
    setActivityName("");
  }}
>
  Add Activity
</button>

    <h2>My Activities</h2>
    <ul>
      {activities.map((activity) => (
        <li key={activity.id}>{activity.name}</li>
      ))}
    </ul>

    </div>
  );
}

export default App;