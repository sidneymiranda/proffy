import React from 'react';
import { Link } from 'react-router-dom';

import successIcon from '../../assets/images/icons/successIcon.svg';
import './styles.css';


function RegisterSuccess() {
    return (
        <body className="body-success">
            <div className="body-background">
                <div className="body-success-content">                  
                    <img src={successIcon} alt="Sucesso" />
                    
                    <h2>Cadastro concluído</h2>
                    
                    <div className="content-span">
                        <p>Agora você faz parte da plataforma da Proffy.</p>
                        <p>Tenha uma ótima experiência.</p>
                    </div>
                    
                </div>
                
                <div>
                    <Link 
                        to="/login"
                        className="todo-login"
                    >
                        Fazer login
                    </Link >
                </div>
            </div>          
        </body>
    )
}

export default RegisterSuccess;