import React, { useEffect, useState } from 'react';
import Comentario from '../../components/Comentario';
import AvaliacaoFeita from '../AvaliacaoFeita';

export default function UltimaAvaliacao() {

    const [profAvaliado, setProfAvaliado] = useState({});
    const [listaComentarios, setListaComentarios] = useState([]);

    useEffect(() => {
        let url = 'https://raw.githubusercontent.com/diegofrr/projeto-final/main/ultima-avaliacao.json';
        (async () => {
            await fetch(url)
                .then(response => response.json())
                .then(professor => {
                    setProfAvaliado(professor[0])
                    setListaComentarios(professor[0].comentarios)
                });
        })();

    }, [])

    function avl() {
        if(profAvaliado.avaliacoes) return <AvaliacaoFeita dados={profAvaliado.avaliacoes}/>;
    }

    return (
        <div className='content'>

            <div className='left-container'>
                <div className='professor'>
                    <img className='professor__img' src={profAvaliado.imgSrc} />
                    <span className='professor__nome'>
                        <p className='nome1'>{profAvaliado.primeiroNome}</p>
                        <p className='nome2'>{profAvaliado.segundoNome}</p>
                    </span>
                </div>
                {avl()}
            </div>

            <div className='content2'>
            <div className='right-container'>
                <div className='comentarios-container'>
                    {listaComentarios.map((comentario, i) => {
                        return (
                            <div key={i}>
                                <Comentario hora={comentario.hora} texto={comentario.texto} />
                            </div>
                        )
                    })}
                </div>
            </div>

            </div>
        </div>

    );
}