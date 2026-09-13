import styles from './MenuItem.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { wrapper as PopperWrapper } from '~/components/Wrapper';
import { Children } from 'react';

const cx = classNames.bind(styles);
function MenuItem({ Children }) {
    return (
        <Tippy
            interactive={true}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('content')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h2>menuItem</h2>
                    </PopperWrapper>
                </div>
            )}
        >
            {Children}
        </Tippy>
    );
}

export default MenuItem;
