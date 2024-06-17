import React from 'react'
import Form from '../../shared/Form/Form'

const Register = () => {
    return (
        <div className='form'>
            <div className="form-box">
                <Form submitBtn="Register" formType="register" mainHeading="Create your account" />
            </div>
        </div>
    )
}

export default Register