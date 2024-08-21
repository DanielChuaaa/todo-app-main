import React from "react";
import iconCheck from "../../images/icon-check.svg";
import iconCross from "../../images/icon-cross.svg";

function AddTodoList({ todo, onToggleComplete, onRemove, isDark }) {
  return (
    <>
      <div className={`${todo.completed ? "active" : "notCompleteTodo"} ${isDark && todo.completed ? "activeDark" : null}`}>
        <div className="buttonTextWrapper">
          <button
            className={`${todo.completed ? "completeButton" : "notCompleteButton"} 
            ${isDark ? "" : "notCompleteButtonDark"}
             `}
            onClick={onToggleComplete}
          >
            <img src={todo.completed ? iconCheck : null} />
          </button>
          <p
            className={`${isDark ? "textLight" : "textDark"} ${todo.completed && isDark ? "completeTextLight" : ""} 
            ${todo.completed && !isDark ? "completeTextDark" : ""}`}
          >
            {todo.text}
          </p>
        </div>
        {!todo.notCompleted && (
          <button className="deleteButton" onClick={onRemove}>
            <img src={iconCross} alt="removeIcon" />
          </button>
        )}
      </div>
    </>
  );
}

export default AddTodoList;
