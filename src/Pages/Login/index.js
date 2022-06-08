import './login.css';
import logoDcx from '../../components/images/logo-dcx.png';
import studentsImg from '../../components/images/students.png'
import voltarIcon from '../../components/icons/arrow-left.svg';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className="login-container">
            <Link className='voltarLink' to='/'>
                <img src={voltarIcon} />
                voltar</Link>
            <div className='login-content'>
            <span className='loginMsg'>entre com seu <br />email dcx.</span>
            <div className='botoes-login-container'>
                <button className='botaoDcx'>
                    <img src={logoDcx} />
                    conectar
                </button>
                <button className='botaoAnonimo'>
                    <img/>
                    entrar anonimamente
                    </button>
            </div>
            </div>
            <div className='loginImg-container'>
                <img className='loginImg' src={studentsImg}/>
            </div>
        </div>
    );
}