import React, { useEffect } from 'react';
import {useState} from "react";
 import './LoginStyle.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
function RegisterPage() {
    const [userData,setUserData]=useState({
        email:"",
        name:"",
        phone:"",
        birthdate:"",
        password:"",
        drzava:""
    });
    function handleInput(e){  
 
        let newUserData = userData;  
        newUserData[e.target.name]=e.target.value;
        console.log(newUserData);
  
        setUserData(newUserData);  
    }
    let navigate = useNavigate();

    function handleRegister(e){
             
            e.preventDefault();   
            axios
                .post("http://127.0.0.1:8000/api/register", userData )
                .then((res)=>{  
                    console.log(res.data);
            
                     navigate("/");
                })
                .catch(function (error) {
                    if (error.response) {
                      // Request made and server responded
                      console.log(error.response.data);
                      console.log(error.response.status);
                      console.log(error.response.headers);
                    } else if (error.request) {
                      // The request was made but no response was received
                      console.log(error.request);
                    } else {
                      // Something happened in setting up the request that triggered an Error
                      console.log('Error', error.message);
                    }
                
                  });
    }


    const [drzave, setDrzave] = useState([]);
    useEffect(() => {
        axios({
          method: "GET",
          url:
            "https://restcountries.com/v3.1/all",
        })
          .then((response) => {
            console.log(response.data[0].name.common);
            setDrzave(response.data);
            
          })
          .catch((error) => {
            console.log(error);
         });
     }, []);






  return (
    <div className="limiter">
    <div className="container-login100">
        <div className="wrap-login100">
            <div className="login100-form-title" >
                <span className="login100-form-title-1">
                    Register
                </span>
            </div>

            <form className="login100-form validate-form" method="post" onSubmit={handleRegister}>

            <div className="wrap-input100 validate-input m-b-26" data-validate="Name is required">
                    <span className="label-input100">Name</span>
                    <input className="input100" type="text" name="name" id="name" placeholder="Enter name" onInput={handleInput}/>
                    <span className="focus-input100"></span>
                </div>
                <br /><br /><br /> 

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

                <div className="wrap-input100 validate-input m-b-26" data-validate="Birthdate is required">
                    <span className="label-input100">Drzava </span>
                    <select  className="input--style-3" name="mesto" id="mesto"    onInput={handleInput}>
                                            {drzave.map((d)=><option  className="input--style-3" value={d.name.common} key={d.name.common}  >{d.name.common} </option> )}
                                         
                                          

                                      </select>
                </div>

                <div className="flex-sb-m w-full p-b-30">
                    <div className="contact100-form-checkbox">
                         <a href="/">I already have an account!</a>
                         
                    </div>

                     
                </div>

                <div className="container-login100-form-btn">
                    <button className="login100-form-btn" id="login" name="login"> 	Register 	</button>
                </div>
            </form>
        </div>
    </div>
</div>
        
    );
}

export default RegisterPage;
