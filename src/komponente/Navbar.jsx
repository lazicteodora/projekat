 
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import React from 'react';
function Navbar({token,setToken}) {
  const navigate = useNavigate();
 
  function handleLogout(){ 
   
     
    var config = {
      method: 'post',
      url: 'http://127.0.0.1:8000/api/logout',
      headers:{'Authorization': `Bearer ${ window.sessionStorage.getItem('auth_token')}`},
    };
 
    
    axios(config)
    .then(function (response) {
     
      console.log(response);
     
      window.sessionStorage.setItem('auth_token',null); 
      window.sessionStorage.setItem('auth_name',null); 
      window.sessionStorage.setItem('auth_id',null); 
      navigate('/');
      sessionStorage.clear();
      setToken(null)

    })
    .catch(function (error) {
     
      
      console.log(error);
      

    }); 
  }
  return (

      <div className="navbar">
        {

            token==null? 
               <></>
               
            :
                window.sessionStorage.getItem("auth_name")==='Admin'  ? 
                <>
                 <Link to="/admin" className="navbar-items">Admin  </Link>
       

                 
                  <Link to="/" className="navbar-items" onClick={handleLogout}>Odjavi se  </Link>
                </>
            :
            <>
                        <Link to="/zadaci" className="navbar-items">Zadaci  </Link>
                

                 <Link to="/" className="navbar-items" onClick={handleLogout}>Odjavi se  </Link>
           </>
 

        }
      
       
   </div>
    
  );
}

export default Navbar;
