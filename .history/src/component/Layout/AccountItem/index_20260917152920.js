import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '~/component/Image';
const cx = classNames.bind(styles);
function AccountItem({ data }) {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://images.pexels.com/photos/31047958/pexels-photo-31047958/free-photo-of-close-up-of-giant-panda-in-natural-habitat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt={data.name}
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>{data.username}</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <span className={cx('username')}>{data.email}</span>
            </div>
        </div>
    );
}

export default AccountItem;
