import React from 'react'

const TodoList = (props) => {
    return (
        <div>
            <h1>List</h1>
            <p>{props.title}</p>
        </div>
    )
};

export default TodoList;