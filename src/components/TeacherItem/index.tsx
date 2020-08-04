import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return(
        <article className="teacher-item">
        <header>
        <img src="https://avatars1.githubusercontent.com/u/39252967?s=460&u=d01235702a9f8e264f8da3739c0dbda6acc55217&v=4" alt="Sidney Miranda"/>    
            <div>
                <strong>Sidney Miranda</strong>
                <span>Química</span>
            </div>
        </header>            
           <p>
            Entusiasta das melhores tecnologias de química avançada.
            <br /><br />
            Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas experiências.
            </p>
        
        <footer>
           <p> Preço/hora
            <strong>R$ 85,00</strong></p>
            <button>
                <img src={whatsappIcon} alt="Whatsapp"/>
                Entrar em contato
            </button>
        </footer>
    </article>
    );
}

export default TeacherItem;
