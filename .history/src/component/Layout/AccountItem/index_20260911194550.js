import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://images.pexels.com/photos/31047958/pexels-photo-31047958/free-photo-of-close-up-of-giant-panda-in-natural-habitat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="hoa"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span> Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <span className={cx('username')}>Nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
