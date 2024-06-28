import React from 'react'

const InputType = ({ labelText, labelFor, inputType, placeholder, name, value, onChange }) => {
    return (
        <>
            <div className="input-box">
                <label htmlFor={labelFor}>{labelText}</label>
                <input id={labelFor} type={inputType} placeholder={placeholder} name={name} value={value} onChange={onChange} />
            </div >
        </>
    )
}

export default InputType