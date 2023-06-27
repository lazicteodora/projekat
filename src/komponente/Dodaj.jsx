import React from 'react';
import {useState} from "react";
 import './LoginStyle.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
function Dodaj() {


    
    const [zadatakData,setZadatakData]=useState({
        user_id: window.sessionStorage.getItem("auth_id"),
        rok:"",
        koeficijent:1,
        tema:"",

    });
    function handleInput(e){  
 
        let newzData = zadatakData; 
      
        newzData[e.target.name]=e.target.value;  
        console.log(newzData)
        setZadatakData(newzData);  
 
    }
    let navigate = useNavigate();
    function handleAdd(e){

        e.preventDefault(); 

        axios
            .post("http://127.0.0.1:8000/api/zadatak", zadatakData )
            .then((res)=>{ 
                console.log(res);
                if(res.status===200){

                 alert("USPESNO");



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
                     Kreiraj novi zadatak
                </span>
            </div>

            <form className="login100-form validate-form" method="post" onSubmit={handleAdd}>
                <div className="wrap-input100 validate-input m-b-18" data-validate="Tema is required"  >
                    <span className="label-input100">Tema</span>
                    <input className="input100" type="text" name="tema" id="tema" placeholder="Unesi temu" onInput={handleInput}/>
                    <span className="focus-input100"></span>
                </div>
                <br /><br /><br />
                <div className="wrap-input100 validate-input m-b-18" data-validate = "Procenat is required" style={{margin:"5%"}}>
                    <span className="label-input100">Koeficijent</span>
                    <input className="input100" type="text" name="koeficijent" id="koeficijent" placeholder="Procenat od ukupne ocene" onInput={handleInput}/>
                    <span className="focus-input100"></span>
                </div>
                <div className="wrap-input100 validate-input m-b-18" data-validate = "rok is required" style={{margin:"5%"}}>
                    <span className="label-input100">Rok za predaju</span>
                    <input className="input100" type="text" name="rok" id="rok" placeholder="Unesi rok(gggg-mm-dd)" onInput={handleInput}/>
                    <span className="focus-input100"></span>
                </div>
               
               
                <div className="container-login100-form-btn">
                
                    <button className="login100-form-btn" id="login" name="login"> 	Dodaj 	</button>
                </div>
            </form>
        </div>
    </div>
</div>
        
    );
}

export default Dodaj;
