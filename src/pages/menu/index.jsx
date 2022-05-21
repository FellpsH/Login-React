import { Link } from 'react-router-dom';
import IMG from '../../Assets/logo.png'; 
import './estilo.css'
export const Menu = () => {
    return(
        <div className='container'>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            
                <ul>
                    <li><img src={IMG} alt="IMAGEM"/></li>
                    <div className='item'><li><span class="material-symbols-outlined">file_download</span>Download</li></div>
                    <div className='item'><li><span class="material-symbols-outlined">ballot</span>Consultas</li></div>
                    <div className='item sair'><li><span class="material-symbols-outlined">logout</span>Sair</li></div>
                </ul>
            
        </div>
    )
}