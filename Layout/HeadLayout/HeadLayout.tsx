import React from 'react';
import HeadLayoutProps from './HeadLayout.props';

export default function HeadLayout({ ...props }: HeadLayoutProps): JSX.Element {
    return <div {...props}>
        HeadLayoutProps
    </div>;
}