import React from 'react';
import { useState, useEffect } from 'react';
import { resizeImage } from '../Utilities/ResizeImage';

type OptimizedImageProps = {
  imageUrl: string;
  imageWidth: number;
  imageHeight: number;
  altContent?: string;
  title?: string;
  classname?: string;
};

const OptimizedImage = ({
  imageUrl,
  imageWidth,
  imageHeight,
  altContent,
  title,
  classname,
}: OptimizedImageProps): JSX.Element => {
  const [optimizedImageUrl, setOptimizedImageUrl] = useState<string | 0>();
  useEffect(() => {
    const originalImage = new Image();
    function imagedLoaded(): void {
      setOptimizedImageUrl(imageUrl);
    }
    (async (): Promise<void> => {
      const { width, height } = resizeImage(
        imageWidth as number,
        imageHeight as number
      );
      setOptimizedImageUrl(imageUrl + `?w=${width}&h=${height}&fit=crop`);
      originalImage.src = imageUrl as string;
      originalImage.addEventListener('load', imagedLoaded);
    })();
    return () => {
      originalImage.removeEventListener('load', imagedLoaded);
    };
  }, [imageUrl, imageHeight, imageWidth]);
  return (
    <img
      alt={altContent}
      className={classname}
      src={optimizedImageUrl as string}
      title={title}
    />
  );
};

export default OptimizedImage;
