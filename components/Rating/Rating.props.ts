import { DetailedHTMLProps, HTMLAttributes } from 'react';

export default interface PProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>{
    isEditable?: boolean,
    onChangeRating?: any,
    rating: number,
    className?: string
}