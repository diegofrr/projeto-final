import React, { useState, useEffect, useCallback } from 'react';
import './avaliacao.css';
import likeIcon from '../../components/icons/thumbs-up.svg';
import deslikeIcon from '../../components/icons/thumbs-down.svg'

export default function Avaliacao(props) {
    const [quantLikes, setQuantLikes] = useState(props.dados.likes);
    const [quantDeslikes, setQuantDeslikes] = useState(props.dados.deslikes);
    
    const qnt = useCallback(() => {
        return [quantLikes, quantDeslikes]
      },[])

    function likesHandle() {
        if(quantLikes === qnt()[0]) setQuantLikes(qnt()[0]+1);
        else setQuantLikes(qnt()[0])
        if(quantDeslikes !== qnt()[1]) setQuantDeslikes(qnt()[1])
        document.querySelector('.like').classList.toggle('selected');
        document.querySelector('.deslike').classList.remove('selected');
    }
    
    function deslikesHandle() {
        if(quantDeslikes === qnt()[1]) setQuantDeslikes(qnt()[1]+1);
        else setQuantDeslikes(qnt()[1])
        if(quantLikes !== qnt()[0]) setQuantLikes(qnt()[0]);
        document.querySelector('.deslike').classList.toggle('selected');
        document.querySelector('.like').classList.remove('selected');
    }
    
    return (
        <div className='avaliacao-container'>
            <div className='like' onClick={() => likesHandle()}>
                <img src={likeIcon} className='likeIcon' />
                <span>{quantLikes}</span>
            </div>
            <div className='deslike' onClick={() => deslikesHandle()}>
                <span>{quantDeslikes}</span>
                <img src={deslikeIcon} className='deslikeIcon' />
            </div>
        </div>
    );
}