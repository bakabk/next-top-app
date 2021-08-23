import cn from 'classnames';

import HeadLayout from './HeadLayout/HeadLayout';
import FooterLayout from './FooterLayout/FooterLayout';
import SidebarLayout from './SidebarLayout/SidebarLayout';
import LayoutProps from './Layout.props';

import style from './Layout.module.scss';

export default function Layout({ children }: LayoutProps): JSX.Element {    
    return <>
        <HeadLayout />
        <div>
            <SidebarLayout />
            <div>{children}</div>
        </div>
        <FooterLayout />
    </>;
}