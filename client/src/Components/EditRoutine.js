import { AddActivityToRoutine } from ".";
import EditRoutineForm from "./EditRoutineForm";
import { fetchRoutines, fetchActivities } from "../api";
import { useEffect } from "react";

// for each routine which is owned by me I should
// be able to update the name and goal for the routine
// be able to delete the entire routine
// be able to add an activity to a routine via a small form which has a dropdown for all activities, an inputs for count and duration
// be able to update the duration or count of any activity on the routine
// be able to remove any activity from the routine
const EditRoutine = ({
  token,
  activities,
  setActivities,
  routines,
  setRoutines,
}) => {

  return (
    <>
      <EditRoutineForm
        token={token}
        routines={routines}
        setRoutines={setRoutines}
      />

      <AddActivityToRoutine
        token={token}
        activities={activities}
        setActivities={setActivities}
      />
    </>
  );
};
export default EditRoutine;
