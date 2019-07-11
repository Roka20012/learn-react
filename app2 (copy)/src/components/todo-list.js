import React from 'react';

const TodoList = ({}) => {
    return (
        <ul>
            <li><TodoListItem lael="Drink Coffee" /></li>
            <li><TodoListItem label="Build React App" important/></li>
        </ul>
    )
}

export default TodoList;