import React from 'react';
import classes from 'classnames';

import FooterLayoutProps from './FooterLayout.props';

import styles from './FooterLayout.module.scss';

export default function FooterLayout({ className, ...props }: FooterLayoutProps): JSX.Element {
    const classNames = classes(className, styles.footer);

    return <div className={classNames} {...props}>
        <div className={styles.copyright}>OwlTop © 2020 - 2021 Все права защищены</div>
        <div className={styles.link}>Пользовательское соглашение</div>
        <div className={styles.link}>Политика конфиденциальности</div>
    </div>;
}