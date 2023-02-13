import React from "react";
import './btnInicio.css'
import './inicio.js'

const buttonInicio = (({ texto, cor, click}) => {
    if (cor == "roxo") {
        return (

            <div>
                <button class="btnInicio" id='btnRoxo' onClick={click}>{texto}</button>
            </div>
        )
    }
    else if (cor == "verde") {
        return (

            <div>
                <button class="btnInicio" id='btnVerde' onClick={click}>{texto}</button>
            </div>
        )
    }
    else if (cor == "limpar") {
        return (

            <div>
                <button class="btnInicio" id='limpar' onClick={click}>{texto}</button>
            </div>
        )
    }
    
})

export default buttonInicio;
