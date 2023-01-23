import { Component } from "react";
class DigitalClock extends Component{
    constructor(props){
        super(props);
       
        this.state = {
            date: new Date(),
            // isPlaying : true
        };
        
        
    }

   
    handleClock(){
        this.setState({date: new Date()});
        
    }
    
    componentDidMount(){
        this.timerID = setInterval(()=> this.handleClock(),1000);
        console.log("Mount")
    }
    componentDidUpdate(){
        console.log("Updating");
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
        console.log("Unmount")
      }
    
    render(){
              
        return(
            <>
                <h1>It is {this.state.date.toLocaleTimeString()}</h1>
                {/* <button Play onClick={this.handlePlay()}/> */}
            
            
            </>

        );
    }
}
export default DigitalClock;