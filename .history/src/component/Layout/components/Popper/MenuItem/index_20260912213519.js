import styles from './MenuItem.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { wrapper as PopperWrapper } from '~/component/Layout/components/Popper';

const cx = classNames.bind(styles);
function MenuItem({ children }) {
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
            {children}
        </Tippy>
    );
}

export default MenuItem;
