import axios from "axios";
import Profiles from "./Profiles";
import { useEffect, useState } from "react";
const ProfileList = () => {
  const url = "https://randomuser.me/api/?nat=in&results=5&page=2";

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((result) => {
        setUsers(result.data.results);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  JSON.stringify(users);
  console.log(users)

  return(
    
        <div>
               
            {
                
                users.map((element, i)=>{
                    const {name, email, picture} =element
                    const fullname = name.title + " "+ name.first + " " + name.last 
                    const image = picture.medium
                    return(
                        <div className="profileDetails" key = {i}>
                            <Profiles picture= {image} name = {fullname} email ={email}/>
                        </div>
                    )
                })
            }
    </div>
  )
};
export default ProfileList;
