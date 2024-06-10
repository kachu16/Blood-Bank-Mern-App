import React from 'react'
import Form from '../../shared/Form/Form'

const Register = () => {
    return (
        <div className='form'>
            <div className="form-box">
                <Form submitBtn="Register" formType="register" />
            </div>
        </div>
    )
}

export default Register