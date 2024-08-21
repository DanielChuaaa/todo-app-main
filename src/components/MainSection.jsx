import React, { useState } from "react";
import AddTodoList from "./AddTodolist";
import ToggleInfo from "./ToggleInfo";
import ToggleInfoMobile from "./ToggleInfoMobile";

function MainSection({
  hardcodedTodos,
  handleToggleComplete,
  handleRemoveTodo,
  getItemLeft,
  setFilter,
  getFilteredTodos,
  clearCompletedTodos,
  isDark,
  darkModeToggle,
}) {
  const filteredTodos = getFilteredTodos();
  return (
    <section>
      <div className="containerr">
        <div className={`todolistWrapper ${isDark ? "lightModeTodo" : "darkModeTodo"}`}>
          {filteredTodos.map((todo) => (
            <AddTodoList
              key={todo.id}
              todo={todo}
              onToggleComplete={() =>
                handleToggleComplete(
                  todo.id,
                  hardcodedTodos.some((hardcodedTodos) => hardcodedTodos.id === todo.id)
                )
              }
              onRemove={() =>
                handleRemoveTodo(
                  todo.id,
                  hardcodedTodos.some((hardcodedTodos) => hardcodedTodos.id === todo.id)
                )
              }
              isDark={isDark}
            />
          ))}

          <ToggleInfo itemLeft={getItemLeft()} setFilter={setFilter} clearTodo={clearCompletedTodos} isDark={isDark} />
        </div>

        <ToggleInfoMobile itemLeft={getItemLeft()} setFilter={setFilter} clearTodo={clearCompletedTodos} isDark={isDark} />
      </div>
    </section>
  );
}

export default MainSection;
