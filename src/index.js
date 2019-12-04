import React from 'react';
import  ReactDOM from   'react-dom';
///////////////////////////////////////////////////////////////////////////////////////////////
const TodoList = ()=>{
    const items= ['Learn React', 'Build Awesome App']
   return (
       <ul>
           <li>{items[0]}</li>
           <li>{items[1]}</li>
       </ul>
   );
};
const AppHeader = ()=>{
   return (
       <h1>My Todo List</h1>
   );
};
const SearchPanel = ()=>{
    const searchText = 'Type here to search';
    const searchStyle = {
        fontSize: '20px'
    };
    return(
        <input
            placeholder={searchText}
            style={searchStyle}
        />
    );
};
const App = ()=>{
    return(
        <div>
            <span>{(new Date()).toString()}</span>
            <AppHeader/>
            <SearchPanel/>
            <TodoList/>
        </div>
    );
};
let a=1;
console.log(a);
///////////////////////////////////////////////////////////////////////////////////////////////////
 ReactDOM.render(
     <App/>,
     document.querySelector('#root')
 );