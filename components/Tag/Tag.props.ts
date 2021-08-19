import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export default interface TagPropsextends extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    size?: 's' | 'm',
    children: ReactNode,
    className?: string,
    type?: 'ghost' | 'primary' | 'green' | 'red' | 'grey',
    href?: string
}