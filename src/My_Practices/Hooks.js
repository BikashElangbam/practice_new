import React, { useReducer } from "react";
function Hooks(){

    // useReducer -- similar to useState , complex state logic that involves multiple sub-value

    // const initialState =  {count : 0}
    // function reducer(state, action){
    //     switch(action.type){
    //         case '+':
    //             return {count : state.count + 1}
    //         case '-':
    //             return {count : state.count - 1}
    //         default: 
    //             console.log("Invalid option")   
    //     }   
    // }

    // function counter(){}
    // const [state, dispatch] = useReducer(reducer, initialState)
    // return(
    //     <>  
    //         Count : {state.count} <hr/>
    //         <button onClick={() => dispatch({type:'+'})}> + </button>
    //         <button onClick={() => dispatch({type:'-'})}> - </button>

    //     </>
    // )

    const initialState =  {message : ""}
    function reducer(state, action){
        switch(action.type){
            case 'Login':
                return {message: "Login" }
            case 'Logout':
                return {message : "Logout"}
            default: 
                console.log("Invalid option")   
        }   
    }

    
    const [state, dispatch] = useReducer(reducer, initialState)
    return(
        <>  
            Message : {state.message} <hr/>
            <button onClick={() => dispatch({type:'Login'})}> Login </button>
            <button onClick={() => dispatch({type:'Logout'})}> Logout </button>

        </>
    )
    

}
export default Hooks;