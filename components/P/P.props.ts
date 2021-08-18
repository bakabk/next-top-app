import { ReactChild } from 'react';

export default interface PProps {
    size?: 's' | 'm' | 'l',
    children: ReactChild,
    className?: string
}