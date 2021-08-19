import PProps from './P.props';
import cn from 'classnames';

import style from './P.module.scss';

function P({ className, children, size = "m", ...restProps }: PProps): JSX.Element {
    const classes = cn(className, style.p, {
        [style.s]: size === "s",
        [style.m]: size === "m",
        [style.l]: size === "l"
    });
    return <p className={classes} {...restProps}>
            {children}
        </p>;
}

export default P;