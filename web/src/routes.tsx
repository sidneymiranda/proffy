import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import TeachersList from './pages/TeachersList';
import TeachersForm from './pages/TeachersForm';
import Login from './pages/Login';
import Register from './pages/Register';
import RegisterSuccess from './pages/RegisterSuccess';
import RecoverPassword from './pages/RecoverPassword';
import ResetSent from './pages/ResetSent';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Login} />
            <Route path="/profile" component={Landing} />
            <Route path="/register" component={Register} />
            <Route path="/register-success" component={RegisterSuccess} />
            <Route path="/recover-password" component={RecoverPassword} />
            <Route path="/reset-sent" component={ResetSent} />
            <Route path="/study" component={TeachersList} />
            <Route path="/give-classes" component={TeachersForm} />
        </BrowserRouter>
    );
}

export default Routes;
