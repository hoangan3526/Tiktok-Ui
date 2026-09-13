function MenuItem() {
    return (
        <Tippy
            interactive={true}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-items')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h3 className={cx('search-title')}>Account</h3>
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                    </PopperWrapper>
                </div>
            )}
        >
            <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
        </Tippy>
    );
}

export default MenuItem;
