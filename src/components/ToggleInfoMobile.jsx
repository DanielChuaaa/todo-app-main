import React, { useState } from "react";

function ToggleInfoMobile({ setFilter, isDark }) {
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
      <div className="getItemMobile">
        <div className={`toggleItemMobile ${isDark ? "lightModeTodoMobile" : "darkModeTodoMobile"}`}>
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
      </div>
    </>
  );
}

export default ToggleInfoMobile;
