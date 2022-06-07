import React, { useState, useEffect, useCallback } from 'react';
import likeIcon from '../../components/icons/thumbs-up.svg';
import deslikeIcon from '../../components/icons/thumbs-down.svg'
import './avaliacaoFeita.css'

export default function AvaliacaoFeita(props) {
    const [quantLikes, setQuantLikes] = useState(props.dados.likes);
    const [quantDeslikes, setQuantDeslikes] = useState(props.dados.deslikes);
    
    const qnt = useCallback(() => {
        return [quantLikes, quantDeslikes]
      },[])
    
    return (
        <div className='avaliacaoFeita-container'>
            <div className='likeFeitos'>
                <img src={likeIcon} className='likeIcon' />
                <span>{quantLikes}</span>
            </div>
            <div className='deslikeFeitos'>
                <span>{quantDeslikes}</span>
                <img src={deslikeIcon} className='deslikeIcon' />
            </div>
        </div>
    );
}