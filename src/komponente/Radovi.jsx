import axios from 'axios';
import { MDBDataTableV5 } from 'mdbreact';
 
import React, { useState } from 'react';
function Radovi({radovi}) {
    const [komentarData,setKomentarData]=useState({
       
        profesor_id:window.sessionStorage.getItem("auth_id"),
        ocena:51,
        opis:"Excepturi officia voluptatem facere. Modi eveniet alias totam dignissimos et labore. Voluptate exercitationem rerum quo.",
        

    });
    function handleInput(e){  
 
      let newKomentarData = { ...komentarData };
      newKomentarData[e.target.name] = e.target.value;
        console.log(newKomentarData)
        setKomentarData(newKomentarData);  
 
    }
 
 
    function oceni(id){
        komentarData.rad_id=id;
        var config = {
            method: 'post',
            url: 'http://127.0.0.1:8000/api/komentar?rad&id=${id}',
            headers:{'Authorization': `Bearer ${ window.sessionStorage.getItem('auth_token')}`},
            data:komentarData
          };
       
          
          axios(config)
          .then(function (response) {
           
            console.log(response);
            alert("USPEH")
           
      
          })
          .catch(function (error) {
           
            
            console.log(error);
            
      
          }); 
    }

    const [datatable, setDatatable] = React.useState({
       
        columns: [
          {
            label: 'id',
            field: 'id',
            width: 150,
          },
          {
            label: 'student',
            field: 'student',
            width: 200,
          },
          {
            label: 'zadatak',
            field: 'zadatak',
            width: 270,
          },
          {
            label: 'datum_predaje',
            field: 'datum_predaje',
            width: 270,
          },
          {
            label: 'rad',
            field: 'rad',
            width: 270,
          },
          {
            label: 'oceni_rad',
            field: 'oceni_rad',
            width: 270,
          }
           
        ],
        rows: radovi.map((r) => {
          const fileLink = r.file ? (
            <a href={`http://127.0.0.1:8000/uploads/${r.file.file_name}`} download target="_blank">
              OTVORI
            </a>
          ) : null;
          return {
            id: r.id,
            student: r.student.name,
            zadatak: r.zadatak.tema,
            datum_predaje: r.datum_predaje,
            rad: fileLink,
            oceni_rad: (
              <>
                <input type="text" name="ocena" onInput={handleInput} />
                <button className="btn" onClick={() => oceni(r.id)}>
                  Oceni
                </button>
              </>
            ),
          }
    
        }),
       
    })      
        
    
      return <div className='container'><MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} /></div>;
    }

  
  export default Radovi;
  