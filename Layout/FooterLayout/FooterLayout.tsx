import React from 'react';
import FooterLayoutProps from './FooterLayout.props';

export default function FooterLayout({ ...props }: FooterLayoutProps): JSX.Element {
    return <div {...props}>
        FooterLayout
    </div>;
}