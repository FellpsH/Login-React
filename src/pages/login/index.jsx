import IMG from '../../Assets/logo.png';
import '../../estilo.css';
import { Link } from 'react-router-dom';
export const Login = () =>{
    return (
        <div className='container'>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"></link>
      <div className='container-login'>
        <div className="wrap-login">
            <form className='login-form'>
              <span className="login-form-title">
                    <img src={IMG} alt="IMAGEM"/>
              </span>

              <span className="login-form-title">THINK FORNECEDOR</span>
              
              {/* USUARIO */}
              <div className='wrap-input'> 
                <span className="material-icons">
                account_circle
                </span>
                <input className="input" type="text" id="username" name="username"  placeholder="Usuario"></input><br></br>
              <span className='focus-input'></span>
              </div>
              
              {/* SENHA */}
              <div className='wrap-input'>
                <span className="material-icons">
                lock
                </span>
              <input className="input" type="password" id="password" name="password" placeholder="Senha"></input><br></br>
              <span className='focus-input'></span>
              </div>

              {/* LOGIN */}
              <div className="container-login-form-btn">
                  <button className="login-form-btn" to="/menu"><Link className="login-form-btn" to="/menu">LOGIN</Link></button>
              </div>
            </form>
        </div>
      </div>

    </div>
    )
}