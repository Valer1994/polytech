import React from 'react';
import classnames from 'classnames';

import './style.scss';

// button types  'outlineButtonPrimary',
//               'btn-secondary',
//               'outlineButtonSecondary',
//               'btn-success',
//               'outlineButtonSuccess',
//               'btn-info',
//               'outlineButtonInfo',
//               'btn-warning',
//               'outlineButtonWarning',
//               'btn-danger',
//               'outlineButtonDanger',
//               'btn-white',
//               'btn-link',
//               'largeButton',
//               'smallButton',
//               'roundedBorder'

const Button = ({
    text,
    size,
    roundedBorder,
    onClick,
    children,
    buttonType,
    ...restProps
}) => (
    <button className={classnames('Button', {
        [ buttonType] : buttonType,
        [ size ] : size,
        [ roundedBorder ] : roundedBorder})}
        onClick = {onClick}
    { ...restProps }
    >
        {text || children}
    </button>
);

export default Button;