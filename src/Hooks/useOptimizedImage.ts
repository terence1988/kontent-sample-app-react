import { useState, useEffect } from 'react';
import { resizeImage } from '../Utilities/ResizeImage';

export function useOptimizedImage(
  imageUrl: string | 0,
  imageWidth: number,
  imageHeight: number
): string {
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
  console.log(optimizedImageUrl);
  return optimizedImageUrl as string;
}
