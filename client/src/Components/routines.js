import { fetchRoutines } from "../api";
import { useState, useEffect } from "react";

const Routines = () => {
  const [routines, setRoutines] = useState([]);

  const handleRoutines = async () => {
    try {
      const newRoutines = await fetchRoutines();
      setRoutines(newRoutines);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleRoutines();
  }, []);

  return (
    <div className="routines-wrapper">
      {routines.length ? (
        routines.length > 0 &&
        routines.map(({ id, creatorId, name, goal, creatorName }) => {
          return (
            <div className="routines" key={id}>
              {name}
              {goal}
              {creatorName}
            </div>
          );
        })
      ) : (
        <h5>No routines to display</h5>
      )}
    </div>
  );
};

export default Routines;