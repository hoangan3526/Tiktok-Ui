import classNames from 'classnames';
import { forwardRef, useState } from 'react';
import images from '~/assets/image';
import styles from './Image.module.scss';
const Image = forwardRef(({ src, className, alt, ...props }, ref) => {
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
export default Image;
