import React from 'react';
import { Link } from 'react-router-dom';

import successIcon from '../../assets/images/icons/successIcon.svg';
import './styles.css';


function ResetSent() {
    return (
        <body className="body-reset-sent">
            <div className="body-background">
                <div className="body-reset-sent-content">                  
                    <img src={successIcon} alt="Sucesso" />
                    
                    <h2>Redefinição enviada</h2>
                    
                    <div className="reset-sent-content-span">
                        <p>Boa, agora é só checar o e-mail que foi enviado para você</p>
                        <p>redefinir sua senha e aproveitar os estudos.</p>
                    </div>
                    
                </div>
                
                <div>
                    <Link 
                        to="/"
                        className="reset-sent-login"
                    >
                        Voltar ao login
                    </Link >
                </div>
            </div>          
        </body>
    )
}

export default ResetSent;