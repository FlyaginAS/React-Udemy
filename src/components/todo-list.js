import  React from 'react';
import TodoListItem from './todo-list-item';

const TodoList = ({todos})=>{
    const items= ['Learn React', 'Build Awesome App'];
    const elements = todos.map( (item)=>{
        return (<li>
            <TodoListItem
                {...item}
        />
        </li>)
    });
    return (
        <ul>
            {elements}
        </ul>
    );
};
export  default  TodoList;