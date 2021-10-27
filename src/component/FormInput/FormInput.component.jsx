import React from 'react';

import './FormInput.style.scss';

const FormInput = ({ handleChange, label, ...OtherProps }) => (
    <div className='form'> 
        <input className='form-input' handleChange={ handleChange } { ...OtherProps } />
        {
            label ?
                (<label className={`${
                    OtherProps.value.length ? 'shrink' : ''
                    } form-input-label`}>
                    {label}
                </label>)
            :
                null
        }
    </div>
)

export default FormInput;