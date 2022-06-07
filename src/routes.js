import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from './Pages/Inicio';
import UltimaAvaliacao from "./Pages/UltimaAvaliacao";

export default function RoutesApp() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/"  element={<Inicio />} />
                <Route path="/ultima-avaliacao"  element={<UltimaAvaliacao />} />
            </Routes>
        </BrowserRouter>
    );
}
