import { Component } from "react";
import TodoList from './TodoList';
import './TodoApp.css';

class TodoApp extends Component{
    constructor(props){
        super(props);
        this.state = {
        todoLists:[],
        todo:"",
        
    }
    }
    
    handleChange = (e)=>{
        this.setState(
            {todo: e.target.value}
        );
    }
    handleAddTodo = (e)=>{
        if(this.state.todo !== ""){
            const newTodoList=[...this.state.todoLists, this.state.todo]
            this.setState({
                todoLists:newTodoList,
                todo:""
            });
        }
        
    }

    handleDelete = (id)=>{
        const totalTodoList = [...this.state.todoLists]
        const remaningTodoList = totalTodoList.filter((value,i)=>{
            return(i !== id);
        })
        this.setState({
            todoLists:remaningTodoList
        })
        
    }
    handleClearAll=()=>{
        this.setState({
            todoLists:[]
        })
    }

    render(){
        return(
            <div className="todoApp">
                <h2>Todo App</h2>
                <div className="container">
                    <input type="text" className="textInput" placeholder="Add your new todo" value = {this.state.todo} onChange={this.handleChange}/>
                    <button className="btnAdd" onClick={this.handleAddTodo}><ion-icon name="add-outline"></ion-icon></button>
                </div>
                <ul className="itemList">
                    {
                        this.state.todoLists.map((todoItem,i)=>{
                            return <TodoList key={i} id={i} value ={todoItem} sendDeletedItem={this.handleDelete}/>
                        })
                    }
                </ul>
                <div className="footer">
                    <h4>You have {Object.keys(this.state.todoLists).length} pending tasks</h4>
                    <button className="btnClearAll" onClick={this.handleClearAll}>Clear All</button>
                </div>

            </div>


        );
    }
}
export default TodoApp;