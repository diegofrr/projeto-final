import './navBar.css';

export default function NavBar(props) {
    return(
        <div className="navBar">
            <ul>
                {props.avaliacaoDia ? <li>{props.avaliacaoDia}</li>
                : ''}
                {props.ultimaAvaliacao ? <li>{props.ultimaAvaliacao}</li>
                : ''}
            </ul>
        </div>
    )
}