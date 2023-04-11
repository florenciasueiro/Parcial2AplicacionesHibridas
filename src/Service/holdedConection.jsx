import React, { useState, useEffect, useCallback } from 'react';

//esta funcion es la que llama el login form para enviar los datos de email y password al api
// de que trae la lista de contactos pero usamos el filtro de customid para que solo traiga el
// usuario que tenga ese mismo customid.


// ya que en holded no hay un campo de contraseña decidi usar el custom id como la suma de email y password


export default function useContactos(){
const contactos= useCallback(async (email, password) => {
  //   aca lo que hago es remplazar los caracteres que por lo visto no se peuden mandar en un http request
  const customid = `${email.replace(/@/g, "%40")}%3B${password}`;
  //borrar
  console.log(customid);
  //   todo en un bloque try para robustez
    try {
        const response = await  fetch(`https://api.holded.com/api/invoicing/v1/contacts?customId=${customid}`, {
          headers: {
            // todavia no esta resuelto lo del cors asi que el acces control no esta haciendo nada
            'customid':customid,
            'key': '343654e3d1014f792344a19ee8f40503',
            'accept': 'application/json',
            'Acces-Control-Allow-Origin': '*'
                    }
                }
            );
        if (!response.ok){
            throw new Error(`Network response was not ok (${response.status})`)
            }

        const data = await response.json();
        // borrar todos los console log
            console.log(data);
            console.log("data[0]");
            console.log(data[0]);
            console.log("JSON.stringify(data)");
            console.log(JSON.stringify(data));
            // guardo el user en un sessionStorgae
            
            sessionStorage.setItem("user", JSON.stringify(data[0]));
            // no elimine este por que fue el primer intentno y no estoy seguro si lo sigo usando en algun otro lugar
            sessionStorage.setItem("userName", JSON.stringify(data[0].name));
            console.log(data[0].name);
            console.log("sessionStorage.getItem('user')");
            console.log(sessionStorage.getItem("user"));
            // una vez se ejecuta esto refresco la pagina para que se actualice la palabra login pues no se como hacerlo de otra manera

            window.location.reload();
        }catch(error){
            console.error("There was a problem with the fetch operation:", error);
          }
        }, []);
        
        return contactos;

}
