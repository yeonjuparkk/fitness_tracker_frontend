import { useState, useEffect } from "react";
import { createRoutineActivity, fetchActivities } from "../api";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
// for each routine which is owned by me I should
// be able to update the name and goal for the routine
// be able to delete the entire routine
// be able to add an activity to a routine via a small form which has a dropdown for all activities, an inputs for count and duration
// be able to update the duration or count of any activity on the routine
// be able to remove any activity from the routine

const EditRoutines = ({ token, activities, setActivities }) => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const [activitiesName, setActivitiesName] = useState("");
  const [activitiesDescription, setActivitiesDescription] = useState("");
  const [count, setCount] = useState("");
  const [duration, setDuration] = useState("");

  const [routineActivity, setRoutineActivity] = useState([]);

  const handleActivities = async () => {
    try {
      const newActivities = await fetchActivities();
      setActivities(newActivities);
      console.log("newActivities", newActivities);
    } catch (error) {
      console.error(error);
    }
  };

  const handleRoutineActivitySubmit = async (event) => {
    try {
      event.preventDefault();
      const newRoutineActivity = await createRoutineActivity(
        name,
        goal,
        isPublic,
        activitiesName,
        activitiesDescription,
        duration,
        count,
        token
      );
      console.log("newRoutineActivity", newRoutineActivity);
      setRoutineActivity([...routineActivity, newRoutineActivity]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleActivities();
  }, [token]);

  return (
    <>
      <div className="add-a-routin-activity">
        <div className="new-routine-activity-form-title"> ADD ACTIVITY </div>
        <form
          className="new-routine-activity-form"
          onSubmit={handleRoutineActivitySubmit}
        >
            <select id="activities-name-option">
              {activities.map((activity) => {
                const { activitiesName } = activity;
                return (
                  <>
                    <option>{activitiesName}</option>
                  </>
                );
              })}
            </select>
          <input
            id="count-input"
            type="text"
            placeholder="count*"
            onChange={(event) => setCount(event.target.value)}
            required
          />
          <input
            id="duration-input"
            type="text"
            placeholder="duration*"
            onChange={(event) => setDuration(event.target.checked)}
          />
          <Button id="submit-button">Submit</Button>
        </form>
      </div>
    </>
  );
};

export default EditRoutines;
