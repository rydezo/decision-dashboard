// app component
import { useState } from "react";

function App() {
  // state for the activity name
  const [activityName, setActivityName] = useState("");
  const [activities, setActivities] = useState<string[]>([]);

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
    <button onClick={() => setActivities([...activities, activityName])}>
      Add Activity</button>
    <p>You entered: {activityName}</p>

    <h2>My Activities</h2>
    <ul>
      {activities.map((activity) => (
        <li key={activity}>{activity}</li>
      ))}
    </ul>

    </div>
  );
}

export default App;