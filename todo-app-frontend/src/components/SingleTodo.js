import React,{useContext} from 'react'
import TodoContext from '../context/TodoContext'

function SingleTodo({ todo, tag, date, id }) {

    const {deleteTodo} = useContext(TodoContext);

    return (
        <div>
            <div className="single-todo ">
                <div className="box-1 m-3 bg-blue-800 p-3 rounded">
                    <div className="todo-content text-lg">
                        ➡ {todo}
                    </div>
                    <div className="flex">
                        <div className="flex-auto">
                            <div className="todo-property flex flex-wrap text-sm">
                                <div className="todo-date  rounded-xl px-3 m-1 bg-blue-400">
                                    {date}
                                </div>
                                <div className="todo-tag rounded-xl px-3 m-1 bg-blue-400">
                                    {tag}
                                </div>
                            </div>
                        </div>
                        <div className="box-2 flex-none my-auto">
                            <button onClick={() => {deleteTodo(id)}}>
                                <i className="fas fa-trash-alt"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* )} */}
        </div>
    )
}

export default SingleTodo
