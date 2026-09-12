import Header from '~/component/Layout/components/Header';
import styles from './LayoutDefault.module.scss';
import classNames from 'classnames/bind';
import Sidebar from './Sidebar';

const cx = classNames.bind(styles);
function LayoutDefault({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}> {children} </div>
            </div>
        </div>
    );
}

export default LayoutDefault;
