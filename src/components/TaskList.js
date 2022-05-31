import React from "react";

function TaskList(props) {
  function deleteItem(e) {
    e.preventDefault();
    console.log(e.target.className);

    const getTheData = document.querySelector(`.${e.target.className}`);
    const prevElement = getTheData.previousElementSibling.innerHTML;
    console.log(prevElement);
    props.TaskNameChild(props.TaskName.filter((data) => data !== prevElement));
  }

  return (
    <div>
      {props.TaskName
        ? props.TaskName.map((data, i) => {
            let taskNumber = `delete-btn${i + 1}`;
            return (
              <div>
                <p name="name1" key={i} value={data}>
                  {data}
                </p>
                <button
                  className={taskNumber}
                  onClick={deleteItem}
                  type="submit"
                >
                  Delete
                </button>
              </div>
            );
          })
        : "Enter Task Name"}
    </div>
  );
}

export default TaskList;
