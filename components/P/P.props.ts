import { ReactNode } from 'react';

export default interface PProps {
    size?: 's' | 'm' | 'l',
    children: ReactNode,
    className?: string
}