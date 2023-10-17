import React from "react";
import TodoItem from "./TodoItem.js";
import TodoForm from "./TodoForm";

function TodoApp() {
    const [todoList, setTodoList] = React.useState([{ data: 'test', status: 'pending' }])

    function markAsComplete(indexToComplete) {
        let newTodoList = [...todoList];
        newTodoList[indexToComplete].status = 'complete';
        setTodoList(newTodoList);
    }
    function deleteTodoItem(indexToRemove) {
        setTodoList(todoList.filter((_, index) => index !== indexToRemove));
    }
    function addTodoItem(item) {
        setTodoList([
            ...todoList,
            { data: item, status: 'pending' }
        ])
    }

    return (
        <div className="app">
            <div className="todo-list">
                todo items go here
                <ul>
                    {
                        todoList.map((item, index) =>
                            <li key={index}><TodoItem props={{ item, index, markAsComplete, deleteTodoItem }}> </TodoItem></li>
                        )
                    }
                </ul>
                <TodoForm props={{ addTodoItem }} />
            </div>
        </div>
    );
}

export default TodoApp;
