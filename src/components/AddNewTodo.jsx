import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import MainSection from "./MainSection";
import darkmodeIcon from "../../images/icon-moon.svg";
import lightIcon from "../../images/icon-sun.svg";

function AddNewTodo() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [filter, setFilter] = useState("all");
  const [isDark, setIsDark] = useState("true");

  // useEffect(() => {
  //   document.body.className = isDark ? "lightModeBg" : "darkModeBg";
  // });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTodo.trim()) {
      setTodos([...todos, { id: nanoid(), text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const [hardcodedTodos, setHardcodedTodos] = useState([
    { id: 1, text: "Complete online javascript online course", completed: true },
    { id: 2, text: "Jog around the park 3x", completed: false },
    { id: 3, text: "10 minutes meditation", completed: false },
    { id: 4, text: "Read for 1 hour", completed: false },
    { id: 5, text: "Pick up groceries", completed: false },
    { id: 6, text: "Complete Todo App on Frontend Mentor", completed: false },
  ]);

  const handleToggleComplete = (id, isHardcoded) => {
    if (isHardcoded) {
      setHardcodedTodos(hardcodedTodos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
    } else {
      setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
    }
  };

  const handleRemoveTodo = (id, isHardcoded) => {
    if (isHardcoded) {
      setHardcodedTodos(hardcodedTodos.filter((todo) => todo.id !== id));
    } else {
      setTodos(todos.filter((todo) => todo.id !== id));
    }
  };
  // --------------------------------------------------------------
  const getItemLeft = () => {
    const allTodos = [...hardcodedTodos, ...todos];
    return allTodos.filter((todo) => !todo.completed).length;
  };

  const getFilteredTodos = () => {
    const allTodos = [...hardcodedTodos, ...todos];
    if (filter === "all") {
      return allTodos;
    } else if (filter === "active") {
      return allTodos.filter((todo) => !todo.completed);
    } else if (filter === "completed") {
      return allTodos.filter((todo) => todo.completed);
    }
  };

  const clearCompletedTodos = () => {
    setHardcodedTodos(hardcodedTodos.filter((todo) => !todo.completed));
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const darkModeToggle = () => {
    setIsDark(!isDark);
  };

  return (
    <>
      <body className={`lightMode ${isDark ? "lightModeBg" : "darkModeBg"}`}>
        <header className={`${isDark ? "lightBg" : "darkBg"}`}>
          <div className="containerr">
            <div className="logoAndIcon">
              <h1>TODO</h1>
              <button className="themeButton" onClick={darkModeToggle}>
                <img src={`${isDark ? darkmodeIcon : lightIcon}`} alt="Dark Mode Icon" />
              </button>
            </div>

            <div>
              <div className="newTodoWrapper">
                <button className={`${isDark ? "newButtonLight" : "newButtonDark"}`}></button>
                <form onSubmit={handleSubmit} className={`${isDark ? "newTodoLight" : "newTodoDark"}`}>
                  <input type="text" value={newTodo} onChange={handleInputChange} placeholder="Create a new todo..." />
                </form>
              </div>
            </div>
          </div>
        </header>
        <MainSection
          hardcodedTodos={hardcodedTodos}
          handleToggleComplete={handleToggleComplete}
          handleRemoveTodo={handleRemoveTodo}
          getItemLeft={getItemLeft}
          setFilter={setFilter}
          getFilteredTodos={getFilteredTodos}
          clearCompletedTodos={clearCompletedTodos}
          isDark={isDark}
          darkModeToggle={darkModeToggle}
        />
      </body>
    </>
  );
}

export default AddNewTodo;
