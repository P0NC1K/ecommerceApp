import React from 'react';

import './CustomButton.style.scss';
import ArrowHover from '../../assets/arrow.png'

const CustomButton = ({ children, ...OtherProps }) => (

    <button class="CustomButton" { ...OtherProps }>
        <div class="dub-arrow">
            <img src={ ArrowHover } alt="Arrow" />
        </div>

        <button>
            { children }
        </button>
    </button>
)

export default CustomButton;