import React from 'react';
import ProfessorSelecionado from "../../components/ProfessorSelecionado";
import ListaComentarios from "../../components/ListaComentarios";
import './inicio.css'
import NavBar from '../../components/NavBar';

export default function Inicio() {
    return (
        <div className="content">
                <NavBar />
                <ProfessorSelecionado />
                <ListaComentarios />
        </div>
    );
}