import React,{useState} from "react";
import axios from "axios";
function Signup(){
  const [input,setInput] = useState({
   Name:'',
   email:'',
   phone:'',
   psw:'',
   pswrd:'',
  })
  function handleChange(event){
    const{name,value}=event.target;

    setInput(prevInput =>{
      return{
        ...prevInput,
        [name]:value
      }
    })
  }
  function handleClick(event){
    event.preventDefault();
    const newSign={
      Name:input.Name,
      email:input.email,
      phone:input.phone,
      psw:input.psw,
      pswrd:input.pswrd
    }
    axios.post('http://localhost:3000/create',newSign);
  }


    return(
        <div>
            
  <form >
  <div className="container" >
    <h1>Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
    <hr />
    <label for="text"><b>Name</b></label>
    <input onChange={handleChange} type="text" value={input.Name} placeholder="Enter name" name="Name" required />

    <label for="email"><b>Email</b></label>
    <input onChange={handleChange} type="text" value={input.email} placeholder="Enter Email" name="email" required />

    <label for="phone"><b>phone number</b></label>
    <input onChange={handleChange} type="text" value={input.phone} placeholder="Enter phone number" name="phone" required />

    <label for="psw"><b>Password</b></label>
    <input onChange={handleChange} type="password" value={input.psw} placeholder="Enter Password" name="psw" required/>

    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input onChange={handleChange} type="password" value={input.pswrd} placeholder="Repeat Password" name="pswrd" required />

   

    

    <div className="clearfix">
      
      <button onClick={handleClick} type="submit" class="signupbtn">Sign Up</button>
    </div>
  </div>
  </form>
    </div>
    )
}
export default Signup;