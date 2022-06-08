import UltimaAvaliacao from "../../components/UltimaAvaliacao";
import ProfessorSelecionado from "../../components/ProfessorSelecionado";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar";

export default function UltimaAvaliacaoPage() {

    return(
        <div className="container">
            <NavBar />
            <UltimaAvaliacao />
        </div>
    );
}