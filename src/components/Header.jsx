import { useState } from "react";
import darkmodeIcon from "../../images/icon-moon.svg";
import iconCheck from "../../images/icon-check.svg";

function AddNewTodo() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };
  return (
    <>
      <header>
        <div className="container">
          <h1>TODO</h1>
          <img src={darkmodeIcon} alt="Dark Mode Icon" />
          <form onSubmit={handleSubmit}>
            <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder="Create a new todo..." />
          </form>
        </div>
      </header>

      <section>
        <div className="container">
          {todos.map((todo, index) => (
            <div className="todoItem" key={index}>
              <button>
                <img src={iconCheck} alt="Check Icon" />
              </button>
              <p>{todo}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default AddNewTodo;
