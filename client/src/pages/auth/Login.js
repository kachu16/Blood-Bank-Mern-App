import React from 'react';
import Form from '../../components/shared/Form';

const Login = () => {
    return (
        <div className='form'>
            <div className="form-box">
                <Form submitBtn="Login" formType="login" mainHeading="Welcome back" />
            </div>
        </div>
    )
}

export default Login