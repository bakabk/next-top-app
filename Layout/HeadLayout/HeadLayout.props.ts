import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export default interface HeadLayoutPropsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children?: ReactNode
}