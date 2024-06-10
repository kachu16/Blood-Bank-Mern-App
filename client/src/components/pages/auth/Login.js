import React from 'react'
import './login.css';
import Form from '../../shared/Form/Form';

const Login = () => {
    return (
        <div className='form'>
            <div className="form-box">
                <Form submitBtn="Login" formType="login" />
            </div>
        </div>
    )
}

export default Login