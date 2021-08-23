import React from 'react';
import SidebarLayoutProps from './SidebarLayout.props';

export default function SidebarLayout({ ...props }: SidebarLayoutProps): JSX.Element {
    return <div {...props}>
        SidebarLayout
    </div>;
}