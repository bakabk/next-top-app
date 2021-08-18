import React, { ButtonHTMLAttributes, DetailedHTMLProps, ReactChild } from 'react';

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    apperanse: 'ghost' | 'primary',
    children: ReactChild,
    arrow?: ArrowType
}

export type ArrowType = 'none' | 'down' | 'right';