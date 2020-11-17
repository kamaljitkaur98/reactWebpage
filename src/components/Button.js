import React from 'react';
import './Button.css';

const STYLES = ['primary', 'outline'];

const SIZES = ['medium', 'large', 'mobile', 'wide'];

const COLORS = ['red', 'green', 'yellow', 'blue'];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    buttonColor
}) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonColor = COLORS.includes(buttonColor) ? buttonColor : null;

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonColor} ${checkButtonSize}`} onClick={onClick} type={type}>
            {children}
        </button>
    )
}