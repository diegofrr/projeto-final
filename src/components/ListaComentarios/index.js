import React, { useState, useEffect, useCallback } from 'react';
import Comentario from '../Comentario';
import './listaComentarios.css'
import BotaoAddComentario from '../BotaoAddComentario';

export default function ListaComentarios() {

    const [listaComentarios, setListaComentarios] = useState([]);
    const [novoComentario, setNovoComentario] = useState('');

    useEffect(() => {
        let url = 'https://raw.githubusercontent.com/diegofrr/projeto-final/main/comentarios.json';
        (async () => {
            await fetch(url)
                .then(response => response.json())
                .then(dados => {
                    setListaComentarios(dados);
                });
        })();
    }, [])

    function toggleModal(e) {
        let botaoAdd = e.target;
        let modal = document.querySelector('.novoComentario-modal');
        modal.classList.toggle('hidden');
        if(botaoAdd.innerHTML === 'x'){
            botaoAdd.innerHTML = '+';
            botaoAdd.classList.remove('redBg')
        }
        else {
            botaoAdd.innerHTML = 'x';
            botaoAdd.classList.add('redBg')
        }

    }

    const getHora = useCallback(() => {
        let data = new Date();
        return `${data.getHours()}:${data.getMinutes()}`
    }, []);

    function addComentario() {
        if(novoComentario.length < 10) return;
        let comment = {
            id: listaComentarios.length,
            hora: getHora(),
            texto: novoComentario
        }
        setListaComentarios([...listaComentarios, comment]);
        setNovoComentario('');
        document.querySelector('.addComentarioBtn').click();
    }

    return (
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
            <div className='novoComentario-modal hidden'>
                <button onClick={() => addComentario()}>Adicionar</button>
                <input 
                value={novoComentario} onInput={e => setNovoComentario(e.target.value)}
                placeholder='Sua mensagem' type='textarea' maxLength='100'/>
            </div>
            <BotaoAddComentario addComentario={e => toggleModal(e)} />
        </div>
    );
}