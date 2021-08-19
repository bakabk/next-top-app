import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export default interface PProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>{
    size?: 's' | 'm' | 'l',
    children: ReactNode,
    className?: string
}