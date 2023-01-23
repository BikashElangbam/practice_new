import { Component } from "react";

class TodoList extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
                <div className="todoList">
                    <li>{this.props.value}</li>
                
                    <button className="btnDelete" onClick={()=>{this.props.sendDeletedItem(this.props.id)}}>
                    <ion-icon name="trash-outline"></ion-icon>
                    </button>
                </div>
            
            </>

        );
    }
}
export default TodoList;