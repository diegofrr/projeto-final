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

    const removeComentario = useCallback((e) => {
        let idComentario = e.target.getAttribute('chave');
        setListaComentarios(listaComentarios.filter(e => e.id != idComentario));
    }, [listaComentarios]);

    const toggleModal = useCallback((e) => {
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

    }, []);

    const getHora = useCallback(() => {
        let data = new Date();
        return `${data.getHours()}:${data.getMinutes()}`
    }, []);

    function addComentario() {
        if(novoComentario.length < 10) return;
        let comment = {
            id: listaComentarios.length+1,
            hora: getHora(),
            texto: novoComentario,
            removeBtn: <button>teste</button>
        }
        setListaComentarios([...listaComentarios, comment]);
        setNovoComentario('');
        document.querySelector('.addComentarioBtn').click();
    }

    return (
        <div className='content2'>
            <div className='right-container'>
                <div className='comentarios-container'>
                    {listaComentarios.map(comentario => {
                        return (
                            <div key={comentario.id} className='comentario'>
                                <Comentario hora={comentario.hora} texto={comentario.texto} />
                                {comentario.removeBtn ? <button chave={comentario.id} onClick={e => removeComentario(e)} className='removeBtn'>Remover</button> : undefined}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='novoComentario-modal hidden'>
                <button onClick={() => addComentario()}>Adicionar</button>
                <input 
                onKeyDown={e => {
                    if (e.key === 'Enter') addComentario();
                    if (e.key === 'Escape') setNovoComentario('')
                }}
                value={novoComentario} onInput={e => {setNovoComentario(e.target.value)}}
                placeholder='Seu comentário' type='textarea' maxLength='100'/>
            </div>
            <BotaoAddComentario addComentario={e => toggleModal(e)} />
        </div>
    );
}