 
import { BsPaperclip } from 'react-icons/bs';
 import React, { useState } from 'react';
import { Modal } from 'bootstrap';
import axios from 'axios';
 
 function Zadaci({zadaci}) {
    
    console.log(zadaci)


    let sortiranoRastuce = true;
    function sortirajPoRoku() {
        let tabela = document.getElementById("zadaciTabela").getElementsByTagName('tbody')[0];
        let redovi = tabela.rows;
        let niz = [];
        for (let i = 0; i < redovi.length; i++) {
          let datum = new Date(redovi[i].cells[2].innerHTML);
          niz.push({ red: redovi[i], datum: datum });
        }
      
        if (sortiranoRastuce) {
          niz.sort(function(a, b) {
            return a.datum - b.datum;
          });
          sortiranoRastuce = false;
        } else {
          niz.sort(function(a, b) {
            return b.datum - a.datum;
          });
          sortiranoRastuce = true;
        }
      
        for (let i = 0; i < niz.length; i++) {
          tabela.appendChild(niz[i].red);
        }
      }
 
      function pretraziPoTemi() {
        let tabela = document.getElementById("zadaciTabela").getElementsByTagName('tbody')[0];
        let input = document.getElementById("pretraga");
        let filter = input.value.toUpperCase();
        let redovi = tabela.rows;
      
        for (let i = 0; i < redovi.length; i++) {
          let ćelijaTeme = redovi[i].cells[1];
          let vrednostTeme = ćelijaTeme.textContent || ćelijaTeme.innerText;
          if (vrednostTeme.toUpperCase().indexOf(filter) > -1) {
            redovi[i].style.display = "";
          } else {
            redovi[i].style.display = "none";
          }
        }
      }
    
         
   function formatDate() {
    var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
    }
    var danasnjiDatum = formatDate();



    // file validation
    function fileValidate(file) {
    

     if (file.type === "application/pdf") {
       console.log("Odabrani fajl je PDF.");
         return true;
     } else {
       console.log("Odabrani fajl nije PDF.");
        return false;
     }
    }
    const [fajlovi,setFajlovi]=useState([]);
    const handleInput = (e) =>{
        const filesArray = [];
        let isValid = "";
    
        for (let i = 0; i < e.target.files.length; i++) {
        isValid = fileValidate(e.target.files[i]);
        if(isValid){
            filesArray.push(e.target.files[i]);
        }
            
        }
        setFajlovi(filesArray)
        
    }

    function predajRad(zadatak){
        
        const data = new FormData();
        for (let i = 0; i < fajlovi.length; i++) {
            data.append("files[]", fajlovi[i]);
        }
      

        data.append("datum_predaje",danasnjiDatum);
        data.append("student",sessionStorage.getItem("auth_id"));
        data.append("zadatak_id",zadatak.id);

        var config = {
            method: 'post',
            url: 'http://127.0.0.1:8000/api/files',
            data:data,
            headers:{'Authorization': `Bearer ${ window.sessionStorage.getItem('auth_token')}`},
        };  
        
        axios(config).then(res => {  
            
            console.log(res) 

            if(res.status === 200){
            alert("uspeh")
            }else { 
                alert("greska")
            }
         
    }); 

}
    return (
        
           
            <div className="zadaci">
                    <h1>Zadaci za predaju</h1>
                    
                    <div className="input-group">
                    <div className="form-outline">
                        <input type="search"   className="form-control" id="pretraga" onChange={pretraziPoTemi}/>
                        <label className="form-label" htmlFor="form1">Search</label>
                    </div>
               
                    </div>
                    <button className="btn btn-primary" onClick={sortirajPoRoku}>Sortiraj po roku</button>
              <table id="zadaciTabela" className="table table-striped table-bordered table-sm" cellSpacing="0" width="100%">
                    <thead>
                        <tr>
                        <th className="th-sm">ID
                        </th>
                        <th className="th-sm">Tema
                        </th>
                        <th className="th-sm">Rok
                        </th>
                        <th className="th-sm">Profesor
                        </th>
                        <th className="th-sm">Predaj
                        </th>
 
                        </tr>
                    </thead>
                    <tbody>
                           
                    { zadaci .map((z) => (  <tr key={z.id}><td>{z.id}</td><td>{z.tema}</td><td>{z.rok}</td><td>{z.profesor.name}</td><td><button className='dugme' onClick={()=>predajRad(z)}>Predaj<BsPaperclip></BsPaperclip></button><input type="file" id="inputImage" name="file" placeholder="Unesi rad u pdf formatu" className="kupi-kurs" required onChange={handleInput}/></td></tr>  ))}

                    </tbody>
                </table> 
               
    
        </div>
        
    );
  }
  
  export default Zadaci;
  