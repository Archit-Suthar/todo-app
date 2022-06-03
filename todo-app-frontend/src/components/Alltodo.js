import React, { useContext } from "react";
import TodoContext from "../context/TodoContext";
import SingleTodo from "./SingleTodo";

function Alltodo() {
  const { todos } = useContext(TodoContext);
  return (
    <div className="container mx-auto my-6 p-4 w-11/12 rounded-md h-1/2 md:h-1/2 bg-slate-300 flex flex-col">
      <div className="header-all-todo">
        <p className="text-2xl my-1">➡ Your To-dos : </p>
      </div>
      <div className="flex-1 flex-grow h-full mb-3">
        <div className="content-all-todo container overflow-y-auto mx-auto w-11/12 my-2 h-5/6 bg-slate-200 p-2">
          {todos.length !== 0
            ? todos
                .slice(0)
                .reverse()
                .map((todo) => {
                  return (
                    <SingleTodo
                      key={todo._id}
                      id={todo._id}
                      todo={todo.todo}
                      tag={todo.tag}
                      date={todo.date}
                      //   status={todo.status}
                    />
                  );
                })
            : "Your added To-dos will be shown here"}
        </div>
      </div>
    </div>
  );
}

export default Alltodo;
