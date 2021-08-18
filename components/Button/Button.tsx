import React from 'react';
import { ButtonProps, ArrowType } from './Button.props';
import cn from 'classnames';

import ArrowIcon from './Arrow.svg';

import style from './Button.module.scss';

export default function Button({arrow = 'none', apperanse, children, className, ...restProps}: ButtonProps): JSX.Element {
    const classes = cn(
        style.button, 
        className, {
        [style.primary]: apperanse === 'primary',
        [style.ghost]: apperanse === 'ghost'
    });

    const renderArrow = (arrow: ArrowType): JSX.Element => {
        if (arrow === 'none') return <></>;

        const arrowClass = cn(style.arrow, {
            [style.right]: arrow === 'right',
            [style.down]: arrow === 'down'
        });

        return <ArrowIcon className={arrowClass} />;
    };

    return <button className={classes} {...restProps}>
            {children}
            {renderArrow(arrow)}
        </button>;
}