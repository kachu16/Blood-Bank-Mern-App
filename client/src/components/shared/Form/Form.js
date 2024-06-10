import React, { useState } from 'react'
import InputType from './InputType'

const Form = ({ submitBtn, formType }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('donor');
    const [name, setName] = useState('');
    const [organizationName, setOrganizationName] = useState('');
    const [hospitalName, setHospitalName] = useState('');
    const [website, setWebsite] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    return (
        <div>
            <form>
                <h1>Welcome back</h1>
                <p>Please enter your details</p>

                <div>
                    <input id='donarRadio' defaultChecked type='radio' value={role} name='role' onChange={(e) => setRole(e.target.value)} />
                    <label htmlFor='donarRadio'>Donar</label>
                </div>
                <div>
                    <input id='donarRadio' type='radio' value={role} name='role' onChange={(e) => setRole(e.target.value)} />
                    <label htmlFor='donarRadio'>Admin</label>
                </div>
                <div>
                    <input id='donarRadio' type='radio' value={role} name='role' onChange={(e) => setRole(e.target.value)} />
                    <label htmlFor='donarRadio'>Hospital</label>
                </div>
                <div>
                    <input id='donarRadio' type='radio' value={role} name='role' onChange={(e) => setRole(e.target.value)} />
                    <label htmlFor='donarRadio'>Organisation</label>
                </div>


                {/* Switch statement */}
                {(() => {
                    switch (true) {
                        case formType === "login": {
                            return (
                                <>
                                    <InputType labelText='Enter the Email' labelFor='email' inputType='email' placeholder='Email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <InputType labelText='Enter the password' labelFor='password' inputType='password' placeholder='Pasword' name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                                </>
                            )
                        }

                        case formType === "register": {
                            return (
                                <>
                                    <InputType labelText='Enter the Email' labelFor='email' inputType='email' placeholder='Email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <InputType labelText='Enter the password' labelFor='password' inputType='password' placeholder='Pasword' name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                                    <InputType labelText='Enter the Name' labelFor='name' inputType='text' placeholder='Name' name='name' value={name} onChange={(e) => setName(e.target.value)} />
                                    <InputType labelText='Enter the Organization Name' labelFor='organisation' inputType='text' placeholder='Organisation' name='organisation' value={organizationName} onChange={(e) => setOrganizationName(e.target.value)} />
                                    <InputType labelText='Enter the Hopital Name' labelFor='hospital' inputType='text' placeholder='Hospital' name='hospital' value={hospitalName} onChange={(e) => setHospitalName(e.target.value)} />
                                    <InputType labelText='Enter the Website' labelFor='website' inputType='text' placeholder='Website' name='website' value={website} onChange={(e) => setWebsite(e.target.value)} />
                                    <InputType labelText='Enter the Address' labelFor='address' inputType='text' placeholder='Address' name='address' value={address} onChange={(e) => setAddress(e.target.value)} />
                                    <InputType labelText='Enter the Phone' labelFor='phone' inputType='text' placeholder='Phone' name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
                                </>
                            )
                        }
                    }
                })()}

                {/* Don't have an account? <span>Signup</span> */}
                <button type='submit'>{submitBtn}</button>
            </form>
        </div>
    )
}

export default Form