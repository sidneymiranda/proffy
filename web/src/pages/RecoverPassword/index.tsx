import React from 'react';
import Input from '../../components/Input';
import Logo from '../../components/Logo';

import PageHeaderForm from '../../components/PageHeaderForm';

import './styles.css';


function RecoverPassword() {
    return (
        <div id="page-recover-password">
            <div className="page-recover-password-left">
                <div className="page-recover-password-form">
                <PageHeaderForm 
                    title="Eita, esqueceu sua senha?"
                    description="Não esqueça, vamos dar um jeito nisso."        
                />

                <form method="post">
                    <fieldset>
                        <Input 
                            name="email"
                            type="email"
                            placeholder="E-mail"
                        />
                    </fieldset>                       
                </form>

                <button type="submit">Enviar</button>
                </div>
            </div>

            <Logo />
        </div>
        
    )
}

export default RecoverPassword;