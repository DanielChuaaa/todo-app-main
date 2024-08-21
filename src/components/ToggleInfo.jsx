import React, { useState } from "react";

function ToggleInfo({ itemLeft, setFilter, clearTodo, isDark }) {
  const [isActive, setActive] = useState("all");

  const handleClick = (event) => {
    const element = event.target;
    if (element.classList.contains("toggleItemActive")) {
      setActive("");
    } else {
      setActive(element.textContent.toLowerCase());
    }
  };
  return (
    <>
      <div className="getItem">
        <div className={`${isDark ? "itemLight" : "itemDarkLeft"}`}>
          <p>{itemLeft} Items left</p>
        </div>

        <div className="toggleItem">
          <button
            onClick={(event) => {
              setFilter("all");
              handleClick(event);
            }}
            className={`${isActive === "all" ? "toggleItemActive" : ""}  ${isActive !== "all" && !isDark ? "itemDark" : ""}`}
          >
            All
          </button>
          <button
            onClick={(event) => {
              setFilter("active");
              handleClick(event);
            }}
            className={`${isActive === "active" ? "toggleItemActive" : ""} ${isActive !== "active" && !isDark ? "itemDark" : ""}`}
          >
            Active
          </button>
          <button
            onClick={(event) => {
              setFilter("completed");
              handleClick(event);
            }}
            className={`${isActive === "completed" ? "toggleItemActive" : ""} ${isActive !== "completed" && !isDark ? "itemDark" : ""}`}
          >
            Completed
          </button>
        </div>

        <div>
          <button onClick={clearTodo} className={`clearButton ${isDark ? "" : "itemDark"}`}>
            Clear Completed
          </button>
        </div>
      </div>
    </>
  );
}

export default ToggleInfo;
