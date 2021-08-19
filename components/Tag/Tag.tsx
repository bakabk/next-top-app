import TagProps from './Tag.props';
import cn from 'classnames';

import style from './Tag.module.scss';

function Tag({ className, children, size = 's', type = 'ghost', href, ...resProps }: TagProps): JSX.Element {
    const classes = cn(className, style.tag, {
        [style.s]: size === "s",
        [style.m]: size === "m",
        [style.ghost]: type === 'ghost',
        [style.primary]: type === 'primary',
        [style.green]: type === 'green',
        [style.red]: type === 'red',
        [style.grey]: type === 'grey'
    });
    const data = href ? <a href={href}>{children}</a> : children;

    return <div className={classes} {...resProps}>
            {data}
        </div>;
}

export default Tag;