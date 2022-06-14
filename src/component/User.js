import React from "react"
import {useNavigate} from 'react-router-dom'
import './User.css'

function User(props){
        console.log(props.input[0])
        const navigate=useNavigate()

   
  
    function change(event){

        props.input[1](event.target.value)

  }

  function handlesubmit(event){
             event.preventDefault();
             navigate('/info ');
  }

  return (

    <div className="github">   
            <h1>Github Profile</h1>
            <p>Generate your Github Profile</p>
            <form onSubmit={handlesubmit} className="form">
            <input type="text"
             placeholder="Github Username"
             onChange={change}
             value={props.input[0]}
             className="input"/>
            <button type="submit" className="btn-1">Generate</button>
            </form>
     </div>
     
    
   ) 
}

export default User

