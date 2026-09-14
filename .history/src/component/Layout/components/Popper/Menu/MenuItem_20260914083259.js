import Button from '../../Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
const cx = classNames.bind(styles);
function MenuItem({ data, onclick }) {
    const handelClickItem = (menuItem) => {
        console.log(menuItem);
    };
    return (
        <Button
            className={cx('menu-item')}
            leftIcon={data.icon}
            to={data.to}
            onClick={onclick}
            onChange={handelClickItem(data)}
        >
            {data.title}
        </Button>
    );
}

export default MenuItem;
