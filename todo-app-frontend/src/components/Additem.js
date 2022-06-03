import React, { useContext, useState } from "react";
import TodoContext from "../context/TodoContext";
import todosAPI from "../api/todosAPI";

function Additem() {
  const [inputTodo, setInputTodo] = useState("");
  const [inputTag, setInputTag] = useState("");
  const { todos, setTodos } = useContext(TodoContext);
  const d = new Date();

  const addTodo = async (e) => {
    let current = {
      todo: inputTodo,
      tag: inputTag,
      date: `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`,
    };
    e.preventDefault();
    const { data } = await todosAPI.post("/addtodo", current);
    // console.log(data);
    setTodos([...todos, data]);
    setInputTag("");
    setInputTodo("");
  };

  return (
    <div className="container my-3 p-5 mx-auto bg-slate-300 w-10/12 h-50 rounded-md ">
      <form onSubmit={addTodo}>
        <div className="addForm flex flex-flex-row flex-wrap">
          <div className="mr-6 flex-auto">
            <div className="header-addtodo">
              <p className="text-2xl my-2">➡ Add Your Todo</p>
            </div>
            <div className="w-full mb-3">
              <div className="flex justify-center">
                <input
                  type="text"
                  value={inputTodo}
                  onChange={(e) => setInputTodo(e.target.value)}
                  placeholder="Enter Your New To-do here"
                  className="px-5  w-full border rounded py-2 text-gray-700 focus:outline-none items-center"
                  required
                />
              </div>
            </div>
          </div>
          <div className="flex-none">
            <div className="header-addtag">
              <p className="text-2xl my-2">➡ Enter tag</p>
            </div>
            <div className="w-full mb-3">
              <div className="flex justify-center">
                <input
                  type="text"
                  value={inputTag}
                  onChange={(e) => setInputTag(e.target.value)}
                  placeholder="Enter Your Tag"
                  className="px-5  w-full border rounded py-2 text-gray-700 focus:outline-none items-center"
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="px-5 py-1 bg-blue-400 border-solid border-2 border-blue-400 rounded"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default Additem;
