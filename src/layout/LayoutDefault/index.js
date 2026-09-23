import PropTypes from 'prop-types';
import Header from '~/layout/components/Header';
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
LayoutDefault.propTypes = {
    children: PropTypes.node.isRequired,
};
export default LayoutDefault;
