import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import TaskList from "./components/TaskList";

function App() {
  const [taskNames, setTaskNames] = useState([]);

  function handleAddTask(e) {
    e.preventDefault();
    const inputValue = e.target.taskList.value;
    setTaskNames((prevState) => [...prevState, inputValue]);
    document.querySelector(".task-input").reset();
  }

  const handleTaskDelete = (data) => {
    setTaskNames(data);
  };

  // console.log(taskNames);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Todo List</h3>
        <form className="task-input" onSubmit={handleAddTask}>
          <input name="taskList" placeholder="Enter the task"></input>
          <button type="submit">Submit</button>
          <br></br>
        </form>

        <TaskList
          TaskName={taskNames}
          TaskNameChild={handleTaskDelete}
        ></TaskList>
      </header>
    </div>
  );
}

export default App;
