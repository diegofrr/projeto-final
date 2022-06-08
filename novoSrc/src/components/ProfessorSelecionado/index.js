import React, { useEffect, useState, useCallback } from 'react';
import Avaliacao from '../Avaliacao';
import './professor.css';

export default function ProfessorSelecionado() {
    const [professor, setProfessor] = useState({})

    const numeroAleatorio = useCallback((min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }, []);

    function avl() {
        if(professor.avaliacoes) return <Avaliacao dados={professor.avaliacoes}/>;
    }

    useEffect(() => {
        let url = 'https://raw.githubusercontent.com/diegofrr/projeto-final/main/professores.json';
        (async () => {
            await fetch(url)
                .then(response => response.json())
                .then(dados => {
                    let prof = dados[numeroAleatorio(0, dados.length-1)];
                    setProfessor(prof);
                });
        })();

    }, [])

    return (
        <div className='left-container'>
            <div className='professor'>
                <img className='professor__img' src={professor.imgSrc} />
                <span className='professor__nome'>
                    <p className='nome1'>{professor.primeiroNome}</p>
                    <p className='nome2'>{professor.segundoNome}</p>
            </span>
            </div>
                {avl()}
        </div>
    );
}