import PropTypes from 'prop-types';
import classNames from 'classnames';
import { forwardRef, useState } from 'react';
import images from '~/assets/image';
import styles from './Image.module.scss';
const Image = forwardRef(({ src, className, alt, fallback: customFallback = images.no_image, ...props }, ref) => {
    const [fallback, setFallback] = useState('');
    const handelError = () => {
        setFallback(images.no_image);
    };
    return (
        <img
            src={fallback || src}
            className={classNames(styles.wrapper, className)}
            alt={alt}
            ref={ref}
            {...props}
            onError={handelError}
        />
    );
});
Image.propsTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
};
export default Image;
