import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Task from "./Task";
import { filterTasks } from "./actions";
const ListTask = () => {
  const tasks = useSelector((state) => state.tasks);
  const filteredTasks = useSelector((state) => state.filteredTasks);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("all");

  const handleFilterChange = (e) => {
    dispatch(filterTasks(e.target.value));
    setFilter(e.target.value);
  };
  console.log(filter);

  useEffect(() => {
    dispatch(filterTasks("all"));
  }, [tasks])

  return (
    <div>
      <select onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="done">Done</option>
        <option value="notDone">Not Done</option>
      </select>
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
      {/* {
        tasks.filter((task) => {
          switch (filter) {
            case "all":
              return true;
            case "done":
              return task.isDone;
            case "notDone":
              return !task.isDone;
            default:
              return true;
          }
        }).map((task) => (
          <Task
            key={task.id}
            task={task}
          />
        ))
      } */}
    </div>
  );
};

export default ListTask;
