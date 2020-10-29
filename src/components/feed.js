import React from 'react';
import Tweet from './tweet/tweet'
//funcion regular
//JSX(javascript + XML)
//XML permite escribir etiquetas personalizadas
//distingue ente camelCase
export default function Feed(){
    return(
        <div>
            <Tweet /> 
        </div>
    )
}
//<tweet /> para cerrar  una etiqueta que no tiene contenido

// //funcion anonima
// const feed = function feed(){
//     return
// }

// //funcion flecha
// const feed= () =>{
//     return
// }