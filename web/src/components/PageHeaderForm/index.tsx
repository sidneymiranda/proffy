import React from 'react';
import { Link } from 'react-router-dom';

import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';

interface PageHeaderFormProps {
    title: string;
    description: string;
}


const PageHeaderForm: React.FC<PageHeaderFormProps> = (props) => {
    return (
        <header className="header-form">
            
            <Link to="/">
                <img src={backIcon} alt="Voltar" />
            </Link>
          
            <div className="header-form-content">
                <strong>{ props.title }</strong>
                
                { props.description && <p>{ props.description }</p> }

                { props.children }
            </div>

        </header>
    )
}

export default PageHeaderForm;