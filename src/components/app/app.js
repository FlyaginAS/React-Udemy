import React, {Component} from 'react';
import  AppHeader from '../app-header';
import  SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import './app.css';
import  ItemAddForm from '../item-add-form';
///////////////////////////////////////////////////////////////////////////////////////////////



export default  class App extends Component{
    maxId=100;
    state= {
        todoData: [
            {label: 'Drink Coffee', important: false, id:1},
            {label: 'Make Awesome App', important: true, id:2},
            {label: 'Have a lunch', important: false, id:3},
        ]
    };
    deleteItem= (id)=>{
       this.setState(({todoData})=>{
            const idx= todoData.findIndex((el)=> el.id===id);
            const newArray=todoData.slice();
            newArray.splice(idx,1);
            return {
                todoData: newArray,
            }
       });
    };
    addItem = (text)=>{
        const newItem= {
            label: text,
            important: false,
            id: this.maxId++,
        };
        this.setState(({todoData})=>{
            let newArr=todoData.slice();
            newArr.push(newItem);
            return {
                todoData: newArr,
            }
        });
    };

    render(){
        return (
            <div>
                <span>{(new Date()).toString()}</span>
                <AppHeader toDo={1} done={3}/>
                <SearchPanel/>
                <TodoList
                    todos={this.state.todoData}
                    onDeleted = {this.deleteItem}
                />
                <ItemAddForm onItemAdded={this.addItem} />
            </div>
        );
    }

}
