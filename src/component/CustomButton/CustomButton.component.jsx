import React from 'react';

import './CustomButton.style.scss';
import ArrowHover from '../../assets/arrow.png'

const CustomButton = ({ children, ...OtherProps }) => (

    <div class="CustomButton">
        <div class="dub-arrow">
            <img src={ ArrowHover } alt="Arrow" />
        </div>

        <button { ...OtherProps }>
            { children }
        </button>
    </div>
)

export default CustomButton;