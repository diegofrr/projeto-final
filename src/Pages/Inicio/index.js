import React from 'react';
import ProfessorSelecionado from "../../components/ProfessorSelecionado";
import ListaComentarios from "../../components/ListaComentarios";
import './inicio.css'
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar';

export default function Inicio() {
    return (
        <div className="content">
                <NavBar ultimaAvaliacao={<Link to='/ultima-avaliacao'>Última avaliacão</Link>}/>
                <ProfessorSelecionado />
                <ListaComentarios />
        </div>
    );
}