import React, { useState } from 'react'
import './Login.css'
import assets from '../../assets/assets'
import { signup,login,resetPass } from '../../config/firebase'

const Login = () => {

  const [curState,setCurState] = useState("Sign Up");
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const onSubmitHandler = (event) =>{
        event.preventDefault(); // it will not reload the webpage after we submit the form
        if(curState === "Sign Up"){
          signup(username,email,password);
        }else{
          login(email,password)
        }
  }

  return (
    <div className='login'>
      <img src={assets.logo_big} alt="" className='logo' />
       <form onSubmit={onSubmitHandler} className='login-form'>
        <h2>{curState}</h2>
        {curState === 'Sign Up'?<input type="text" placeholder='username' value={username} onChange={(e)=>{setUsername(e.target.value)}} className="form-input" required/>:null}
        <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email address' className="form-input" required />
        <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='password' className="form-input" required />
        <button type='submit' > {curState==="Sign Up"?"create account":'Login now'}</button>
        <div className="login-term">
           <input type="checkbox"/>
           <p>Agree to the terms of use & privacy policy.</p>
        </div>
        <div className="login-forgot">
          {
            curState === 'Sign Up'?
            <p className='login-toggle' >Already have an account. <span onClick={()=>setCurState("Login")} >Login here</span> </p>:
            <p className='login-toggle' >Create an account. <span onClick={()=>setCurState("Sign Up")} >Click here</span> </p>
          }
          {
            curState === "Login"?
            <p className='login-toggle' >Forgot password ? <span onClick={()=>resetPass(email)} >reset here</span> </p>
            :null
          }
         

        </div>
       </form>
    </div>
  )
}

export default Login
