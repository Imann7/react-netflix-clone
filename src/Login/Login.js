import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import Sign from "../Sign/Sign";

function Login() {

const [signIn, setSignIn] = useState(false);


  return (
    <div className="login">
      <div className="header">
        
        <img
          className="login-logo"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />

  <button onClick={()=> setSignIn(true)} className="sign-btn">Sign In</button> 
      </div>

      <div className="content">


{signIn ? <Sign/> : (


<>
<h1 className="text1">Unlimited movies, TV shows, and more.</h1>
        <p className="text2">Watch anywhere. Cancel anytime.</p>
        <h3 className="text3">
          Ready to watch? Enter your email to create or restart your membership.
        </h3>

        <div className="start">
          <input
            type={"email"}
            className="input"
            placeholder="Email address"
            required
          />
       <button onClick={()=> setSignIn(true)} className="start-btn">Get started &#62; </button>
         
        </div>
</>


)




}



      
      </div>
    </div>
  );
}

export default Login;
