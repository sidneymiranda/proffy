import React from 'react';
import Input from '../../components/Input';
import Logo from '../../components/Logo';

import PageHeaderForm from '../../components/PageHeaderForm';

import './styles.css';



function Register() { 
    return (
        <div id="page-register">            
            <div className="page-register-left">              
                <div className="page-register-form">
                    <PageHeaderForm 
                        title="register"
                        description="Preencha os dados abaixo para começar."
                    />

                    <form method="post">
                        <fieldset>                           
                            <Input name="name" type="text" placeholder="Nome" />
                            <Input name="surname" type="text" placeholder="Sobrenome" />
                            <Input name="email" type="email" placeholder="E-mail" />
                            <Input name="password" type="password" placeholder="Senha"/>                       
                        </fieldset>
                    </form>

                    <button type="submit">Concluir register</button>
                </div>               

            </div>
                <Logo />
        </div>
    )
}

export default Register;