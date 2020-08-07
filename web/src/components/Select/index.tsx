import React, { SelectHTMLAttributes } from 'react';

import './styles.css';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string;
    label: string;
    optionLabel?: string;
    options: Array<{
        value: string;
        label: string;
    }>
}


const Select:React.FC<SelectProps> = ({ label, name, optionLabel, options, ...rest }) => {
    return (
    <div className="select-block">
        <label htmlFor={name}>{label}</label>
        <select value="" id={name} {...rest}>
            <option value="" disabled hidden>{ optionLabel }</option>
            
            {options.map(options => {
                return <option key={options.value} value = { options.value }>{ options.label }</option>
            })}
        </select>
    </div>
    );
}

export default Select;