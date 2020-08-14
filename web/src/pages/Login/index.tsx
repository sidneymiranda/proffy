import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '../../components/Input';
import Logo from '../../components/Logo';
import { Link } from 'react-router-dom';

import purpleHeart from '../../assets/images/icons/purple-heart.svg';


import './styles.css';



function Login() {    
    function Checkboxes() {
        const [checked, setChecked] = React.useState(true);

        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setChecked(event.target.checked);
        }
    }

    return (
        <div id="page-login">
           <Logo />
            
            <div className="page-login-right">
                <div className="page-login-form">
                    <form method="post">
                        <fieldset>
                            <legend>Fazer login</legend>
                            <Input name="email" type="email" placeholder="E-mail" />
                            <Input name="password" type="password" placeholder="Senha" />                       
                        </fieldset>
                        
                        <div className="page-login-checkbox"> 
                            <div>                       
                                <Checkbox
                                    color="primary"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}                               
                                />
                                <span>Lembrar-me</span>
                            </div>    
                                                          
                            <a href="#">Esqueci minha senha</a>

                        </div>

                        <Link
                            to="/profile"
                            className="button-login"
                        >
                            Entrar
                        </Link>
                    </form>
                </div>

                <footer className="footer">
                    <div className="footer-left">
                        <h2>Não tem conta?</h2>
                        <a href="#">Cadastre-se</a>
                      
                    </div>

                    <div className="footer-right">
                        <span>
                            É de graça
                            <img src={purpleHeart} alt="" />
                        </span>
                        
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Login;