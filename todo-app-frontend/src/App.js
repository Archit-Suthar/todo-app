import "./App.css";
import { useState, useEffect } from "react";
import todosAPI from "./api/todosAPI";
import Additem from "./components/Additem";
import Alltodo from "./components/Alltodo";
import Navbar from "./components/Navbar";
import TodoContext from "./context/TodoContext";

function App() {
  // State storing all the todos and its properties
  const [todos, setTodos] = useState([]);

  //get the data from the backend if there....
  useEffect(async () => {
    GetTodos();
  }, []);

  const GetTodos = async () => {
    const response = await todosAPI.get("/");
    setTodos(response.data);
  };

  // Function to delete the todo
  const deleteTodo = async (id) => {
    const { data } = await todosAPI.delete(`/deletetodo/${id}`);

    const newTodos = todos.filter((todo) => {
      return todo._id !== data._id;
    });
    setTodos(newTodos);
  };

  let value = { todos, setTodos, deleteTodo };
  return (
    <TodoContext.Provider value={value}>
      <div className="App font-mono h-screen">
        <Navbar />

        <Additem />
        <Alltodo />
      </div>
    </TodoContext.Provider>
  );
}

export default App;
