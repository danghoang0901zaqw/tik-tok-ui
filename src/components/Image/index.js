import { forwardRef, useState } from 'react';
import classNames from 'classnames';
import images from '~/assets/images';
import styles from './Image.module.scss';
//1
// function Image({...props},ref) {
//   return (
//     <img ref={ref} {...props}/>
//   )
// }
// export default forwardRef(Image);
//2
const Image = forwardRef(({ src, alt, className,fallback: customFallback=images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(customFallback);
    };
    return (
        <img
            ref={ref}
            className={classNames(styles.wrapper, className)}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});
export default Image;
