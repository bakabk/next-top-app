import React, {useState, useEffect} from 'react';
import RatingProps from './Rating.props';
import StarIcon from './starIcon.svg';
import cn from 'classnames';

import style from './Rating.module.scss';

type ratingElementType = JSX.Element | undefined;
type ratingType = ratingElementType[];

interface IDataSet {
    index?: string;
}

const initRating = Array(5).fill(<></>);

export default function Rating({ className, rating, isEditable = false, onChangeRating, ...restProps }: RatingProps): JSX.Element {
    const [currentRating, setRating] = useState<ratingType>(initRating);
    const classes = cn(className, style.rating, {});

    const getIndex = (dataSet: IDataSet): number => {
        const index: string = dataSet.index || '0';
        return Number.parseInt(index, 10);
    };

    const handleClick = (event: React.MouseEvent<HTMLSpanElement>): void => {
        if (!isEditable && !onChangeRating) return;

        const preparedIndex:number = getIndex(event.currentTarget.dataset);
        onChangeRating(preparedIndex);
    };

    const handleMouseEnter = (event: React.MouseEvent<HTMLSpanElement>): void => {
        if (!isEditable) return;

        const preparedIndex: number = getIndex(event.currentTarget.dataset);
        preparedRating(preparedIndex);
    };

    const handleMouseLeave = () => {
        if (!isEditable) return;

        preparedRating(rating);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLSpanElement>) => {
        if (!isEditable) return;

        if (event.code === "Space") {
            const preparedIndex: number = getIndex(event.currentTarget.dataset);
            onChangeRating(preparedIndex);
        }
    };

    const preparedRating = (rating: number): void => {
        const newRating: ratingType = currentRating.map((el: ratingElementType, i: number) => {
            const starClass = cn(style.wrapper, {[style.fill]: i < rating});

            return <span key={i}
                tabIndex={0}
                data-index={i + 1}
                onKeyDown={handleKeyDown}
                onClick={handleClick}
                onMouseEnter={handleMouseEnter} >
                    <StarIcon className={starClass} />
                </span>;
        });
    
        setRating(newRating);
    };

    useEffect(() => {
        preparedRating(rating);
    }, [rating]);

    return <div className={classes} 
        onMouseLeave={handleMouseLeave}
        {...restProps} >
            {currentRating}
        </div>;
}