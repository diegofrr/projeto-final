import './addComentarioBtn.css'

export default function BotaoAddComentario(props) {
    return(
        <button onClick={props.addComentario} className="addComentarioBtn">+</button>
    );
}