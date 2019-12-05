import React from 'react';
import  AppHeader from '../app-header';
import  SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import './app.css';
///////////////////////////////////////////////////////////////////////////////////////////////



const App = ()=>{
    const todoData = [
        {label: 'Drink Coffee', important: false, id:1},
        {label: 'Make Awesome App', important: true, id:2},
        {label: 'Have a lunch', important: false, id:3},
    ];
    return(
        <div>
            <span>{(new Date()).toString()}</span>
            <AppHeader toDo={1} done={3}/>
            <SearchPanel/>
            <TodoList todos={todoData}/>
        </div>
    );
};
export  default App;