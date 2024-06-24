import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCarouselData';
// import { useNavigation } from 'react-router-dom';

import React from 'react';

const MainCarousel = () => {
  //   const navigate = useNavigation();

  const items = mainCarouselData.map((item) => (
    <img
      className='cursor-pointer -z-10'
      key={item}
      src={item.image}
      alt=''
      role='presentation'
    />
  ));
  return (
    <div>
      <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
      />
    </div>
  );
};

export default MainCarousel;
