import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css';


function TeachersList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis" >               
                <form action="" id="search-teachers">
                    <Select 
                        name="subject" 
                        label="Disciplina"
                        optionLabel="Selecione" 
                        options = {[
                            {value: 'Português', label: 'Português' },
                            {value: 'História', label: 'História' },
                            {value: 'Química', label: 'Química' },
                            {value: 'Gerografia', label: 'Gerografia' },
                            {value: 'Inglês', label: 'Inglês' },
                            {value: 'Matemática', label: 'Português' },
                            {value: 'Física', label: 'Física' },
                        ]}
                    />
                    <Select
                        name="week_day"
                        label="Dia da Semana"
                        optionLabel="Selecione"
                        options={[
                            {value: '0', label: 'Domingo' },
                            {value: '1', label: 'Segunda' },
                            {value: '2', label: 'Terça-feira' },
                            {value: '3', label: 'Quarta-feira' },
                            {value: '4', label: 'Quinta-feira' },
                            {value: '5', label: 'Sexta-feira' },
                            {value: '6', label: 'Sábado' },
                        ]}   
                    />                           
                    <Input name="time" type="time" label="Hora"/>
                
                </form>
            </PageHeader>

            <main>
               <TeacherItem />
               <TeacherItem />
               <TeacherItem />
               <TeacherItem />
               <TeacherItem />
            </main>          
    </div>
    )
}

export default TeachersList;