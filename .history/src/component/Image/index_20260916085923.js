import { forwardRef, useState } from 'react';
import images from '~/assets/image';

const Image = forwardRef(({ src, alt, ...props }, ref) => {
    const [fallback, setFallback] = useState('');
    const handelError = () => {
        setFallback(images.no_image);
    };
    return <img src={fallback || src} alt={alt} ref={ref} {...props} onError={handelError} />;
});
export default Image;
