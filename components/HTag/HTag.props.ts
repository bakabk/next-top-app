import { ReactChild } from 'react';

export interface HTagProps {
    children: ReactChild,
    tag: 'h1' | 'h2' | 'h3'
}