import {FunctionComponent} from "react";

import HeadLayout from './HeadLayout/HeadLayout';
import FooterLayout from './FooterLayout/FooterLayout';
import SidebarLayout from './SidebarLayout/SidebarLayout';
import LayoutProps from './Layout.props';

import style from './Layout.module.scss';

export default function Layout({ children }: LayoutProps): JSX.Element {    
    return <div className={style.wrapper}>
        <HeadLayout className={style.header} />
        <SidebarLayout className={style.sidebar} />
        <div className={style.body}>
            {children}
        </div>
        <FooterLayout className={style.footer} />
    </div>;
}

export const WithLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoytComponent(props: T): JSX.Element {
        return <Layout>
            <Component {...props} />
        </Layout>;
    };
};