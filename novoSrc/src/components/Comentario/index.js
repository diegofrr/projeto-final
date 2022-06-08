import React, { useState } from 'react';
import './comentario.css'

export default function Comentario(props) {

    return(
        <div className='comentario-content'>
            <span className='comentario__hora'>{props.hora}</span>
            <p className='comentario__texto'>{props.texto}</p>
        </div>
    );

}