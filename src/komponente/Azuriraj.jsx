import React from 'react';
import {useState} from "react";
 import './LoginStyle.css';
import axios from "axios";

function Azuriraj({zadatak}) {


    
    const [zadatakData,setZadatakData]=useState({
        user_id: window.sessionStorage.getItem("auth_id"),
        rok:zadatak.rok,
        koeficijent:zadatak.koeficijent,
        tema:zadatak.tema,

    });
    function handleInput(e){  
 
        let newzData = zadatakData; 
      
        newzData[e.target.name]=e.target.value;  
        console.log(newzData)
        setZadatakData(newzData);  
 
    }
 
    function handleUpdate(e){

      
        e.preventDefault();   

        console.log(zadatakData)
        var config = {
            method: 'put',
            url: 'http://127.0.0.1:8000/api/zadatak/'+zadatak.id,
            headers:{'Authorization': `Bearer ${ window.sessionStorage.getItem('auth_token')}`},
            data:zadatakData          };

          axios(config)
            .then(function (response) {
            
            console.log(response);
            
            alert("USPEH")

            })
            .catch(function (error) {
            
                alert("GRESKA")
                if (error.response) {
                
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    
                    console.log(error.request);
                } else {
                  
                    console.log('Error', error.message);
                }
            

            }); 
           

    }
    console.log(zadatak)
  return (
    <div className="limiter">
    <div className="container-login100">
        <div className="wrap-login100">
            <div className="login100-form-title" >
                <span className="login100-form-title-1">
                     Izmeni zadatak
                </span>
            </div>

            <form className="login100-form validate-form" method="post" onSubmit={handleUpdate}>
                <div className="wrap-input100 validate-input m-b-18" data-validate="Tema is required"  >
                    <span className="label-input100">Tema</span>
                    <input className="input100" type="text" name="tema" id="tema" placeholder="Unesi temu" onInput={handleInput} defaultValue={zadatak.tema}/>
                    <span className="focus-input100"></span>
                </div>
                <br /><br /><br />
                <div className="wrap-input100 validate-input m-b-18" data-validate = "Procenat is required" style={{margin:"5%"}}>
                    <span className="label-input100">Koeficijent</span>
                    <input className="input100" type="text" name="koeficijent" id="koeficijent" placeholder="Procenat od ukupne ocene" onInput={handleInput} defaultValue={zadatak.koeficijent}/>
                    <span className="focus-input100"></span>
                </div>
                <div className="wrap-input100 validate-input m-b-18" data-validate = "rok is required" style={{margin:"5%"}}>
                    <span className="label-input100">Rok za predaju</span>
                    <input className="input100" type="text" name="rok" id="rok" placeholder="Unesi rok(gggg-mm-dd)" onInput={handleInput} defaultValue={zadatak.rok}/>
                    <span className="focus-input100"></span>
                </div>
               
               
                <div className="container-login100-form-btn">
                
                    <button className="login100-form-btn" id="login" name="login"> 	Izmeni 	</button>
                </div>
            </form>
        </div>
    </div>
</div>
        
    );
}

export default Azuriraj;
