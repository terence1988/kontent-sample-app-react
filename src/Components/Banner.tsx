import React, { useMemo } from 'react';
import RichText from './RichText';
import { HeroUnit } from '../Models/hero_unit';
import { useOptimizedImage } from '../Hooks/useOptimizedImage';

interface BannerProps {
  heroUnit: HeroUnit;
}

const Banner: React.FC<BannerProps> = (props) => {
  const heroUnit = props.heroUnit.elements;
  const images = heroUnit.image && heroUnit.image.value;
  const imageUrl = images && images.length && images[0].url;
  const imageWidth = images && images.length && images[0].width;
  const imageHeight = images && images.length && images[0].height;

  const imgUrl = useOptimizedImage(
    imageUrl,
    imageWidth as number,
    imageHeight as number
  );

  const bannerContent = useMemo(() => {
    return (
      <>
        <h2 className="banner-heading">
          {heroUnit.title && heroUnit.title.value}
        </h2>
        {heroUnit.marketingMessage && (
          <RichText
            element={heroUnit.marketingMessage}
            className="banner-text"
          />
        )}
      </>
    );
  }, [heroUnit]);

  return (
    <section
      className="banner-section"
      style={imageUrl ? { backgroundImage: 'url(' + imgUrl + ')' } : undefined}
    >
      {bannerContent}
    </section>
  );
};

export default Banner;
