 import React from "react";
 import '../components/Login.css';
 const Login = ()=>{
    return(
        <div>
            <div className="form-container">
            <form>
                
               <a href="" className="sign-one"><h1>SIGN UP</h1></a>
              

               <li className="one">
                <label for="username">Username</label><br/>
                <input type="text" id="user" name="username" placeholder="Enter name"/>
            </li>

            <li className="two">
                <label for="password">Password</label><br/>
                <input type="password" id="password" name="password" placeholder="Enter Password"/>
            </li>
            <input type="checkbox" className="check"/>
            <label for="sign" className="sign-in">Keep me signed in  </label>

            <button>Sign in </button>
            <hr/>
            
            <a href="" className="a-one"><h3>Forgot Password</h3></a>
     
               </form>
            </div>

        </div>
    )
 }
 
 export default Login;