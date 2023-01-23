import React from "react";
import './profileDetails.css'

const Profiles = (props)=>{

        return(
            

                    <div className="profileDetails" key = {props.id}>

                           <img className="image" src = {props.picture} height="150px"/>
                            <h3>{props.name}</h3> 
                            <h4>{props.email}</h4>


                    </div>

            

        );
    
}
export default Profiles;