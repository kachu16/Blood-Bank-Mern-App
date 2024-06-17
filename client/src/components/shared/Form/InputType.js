import React, { useState } from 'react'

const InputType = ({ labelText, labelFor, inputType, placeholder, name, value, onChange, isError }) => {

    const [isError, setIsError] = useState(false);

    return (
        <>
            <div className="input-box">
                <label htmlFor={labelFor}>{labelText}</label>
                <input style={{borderColor: isError ? 'red' : '#ccc'}} id={labelFor} type={inputType} placeholder={placeholder} name={name} value={value} onChange={onChange} />
                {isError && <p>invalid Input</p>}
            </div >
        </>
    )
}

export default InputType