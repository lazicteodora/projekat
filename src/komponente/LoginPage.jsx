import React from 'react';
import {useState} from "react";
 import './LoginStyle.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
function LoginPage({addToken}) {


    
    const [userData,setUserData]=useState({
        email:"",
        password:""
    });
    function handleInput(e){  
 
        let newUserData = userData; 
      
        newUserData[e.target.name]=e.target.value;  
        console.log(newUserData)
        setUserData(newUserData);  
 
    }
    let navigate = useNavigate();
    function handleLogin(e){

        e.preventDefault(); 

        axios
            .post("http://127.0.0.1:8000/api/login", userData )
            .then((res)=>{ 
                console.log(res.data[0]);
                if(res.data.success===true){

                    window.sessionStorage.setItem("auth_token",res.data[0].token);
                    window.sessionStorage.setItem("auth_name",res.data[0].username);
                    window.sessionStorage.setItem("auth_id",res.data[0].id);

                    addToken(res.data[0].token);
                    console.log(res.data[0].token);
                    if(res.data[0].role === 'admin')
                    {
         
                         navigate("/admin")
                    }
                    else{
                        navigate("/zadaci"); 
                    }



                }else{
                    alert("NEUSPESNO");
                }
            });
           

    }
  return (
    <div className="limiter">
    <div className="container-login100">
        <div className="wrap-login100">
            <div className="login100-form-title" >
                <span className="login100-form-title-1">
                    Sign In
                </span>
            </div>

            <form className="login100-form validate-form" method="post" onSubmit={handleLogin}>
                <div className="wrap-input100 validate-input m-b-26" data-validate="Email is required">
                    <span className="label-input100">Email</span>
                    <input className="input100" type="email" name="email" id="email" placeholder="Enter email" onInput={handleInput}/>
                    <span className="focus-input100"></span>
                </div>
                <br /><br /><br />
                <div className="wrap-input100 validate-input m-b-18" data-validate = "Password is required">
                    <span className="label-input100">Password</span>
                    <input className="input100" type="password" name="password" id="password" placeholder="Enter password" onInput={handleInput}/>
                    <span className="focus-input100"></span>
                </div>

                <div className="flex-sb-m w-full p-b-30">
                    <div className="contact100-form-checkbox">
                         <a href="/register">Create account!</a>
                         
                    </div>

                     
                </div>

                <div className="container-login100-form-btn">
                    <button className="login100-form-btn" id="login" name="login"> 	Login 	</button>
                </div>
            </form>
        </div>
    </div>
</div>
        
    );
}

export default LoginPage;
