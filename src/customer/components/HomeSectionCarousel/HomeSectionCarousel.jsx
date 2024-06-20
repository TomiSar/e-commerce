import { useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import { Button } from '@mui/material';
import { KeyboardArrowLeft } from '@mui/icons-material';

const HomeSectionCarousel = ({ data, sectionName }) => {
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5 },
  };

  const items = data
    .slice(0, 15)
    .map((item, index) => <HomeSectionCard key={index} product={item} />);

  return (
    <div className='border'>
      <h2 className='text-2xl font-extrabold text-gray-800 py-5'>
        {sectionName}
      </h2>
      <div className='relative p-5'>
        <AliceCarousel
          key='carouselRef'
          ref={carouselRef}
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
        />
        <Button
          className='z-50 bg-white'
          variant='contained'
          onClick={(e) => carouselRef?.current?.slideNext(e)}
          sx={{
            position: 'absolute',
            top: '8rem',
            right: '0rem',
            transform: 'translateX(50%) rotate(90deg)',
            bgcolor: 'white',
          }}
          aria-label='next'
        >
          <KeyboardArrowLeft
            sx={{ transform: 'rotate(90deg)', color: 'black' }}
          />
        </Button>
        <Button
          className='z-50 bg-white'
          variant='contained'
          onClick={(e) => carouselRef?.current?.slidePrev(e)}
          sx={{
            position: 'absolute',
            top: '8rem',
            left: '0rem',
            transform: 'translateX(-50%) rotate(-90deg)',
            bgcolor: 'white',
          }}
          aria-label='prev'
        >
          <KeyboardArrowLeft
            sx={{ transform: 'rotate(90deg)', color: 'black' }}
          />
        </Button>
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
