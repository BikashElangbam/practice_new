import { Component } from "react";

class KeyCodes extends Component{
    constructor(){
        super()
        this.state={
            key:'',
            keyCode:''
        }
    }
    handleKey = (e)=>{
        if(e.key === ' '){
            this.setState({
                key:"Space"
            })
        }
        else{
            this.setState({
                key:e.key
            })
        }
        this.setState({
            keyCode:e.keyCode
        })
    }
    render(){
        return(
            <div tabIndex={0} className="keys" onKeyDown={this.handleKey}>
                <h3>{this.state.key}</h3>
                <h3>{this.state.keyCode}</h3>
                <h3>{this.state.key}</h3>
               
            </div> 
        );
    }
}    
export default KeyCodes;

