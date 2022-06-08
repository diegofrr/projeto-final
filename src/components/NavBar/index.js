import { Link } from 'react-router-dom';
import './navBar.css';
import entrarIcon from '../../components/icons/entrar.svg';


export default function NavBar(props) {
    return(
        <div className="navBar">
            <span className='appName'>titxer</span>
            <ul>
                <li>
                    <Link id='link' to='/'>Avaliação do dia</Link>
                </li>
                <li>
                    <Link id='link' to='/ultima-avaliacao'>Avaliação anterior</Link>
                </li>
                
            </ul>

            <Link id='link' to='/login'>
                <img src={entrarIcon} />
                Login</Link>
        </div>
    )
}