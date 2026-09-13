import Button from '../../Button';

function MenuItem({ data }) {
    return <Button leftIcon={data.icon}>{data.title}</Button>;
}

export default MenuItem;
