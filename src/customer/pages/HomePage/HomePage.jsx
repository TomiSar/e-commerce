import MainCarousel from '../../components/HomeCarousel/MainCarousel';
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel';
import { mens_kurta } from '../../../Data/mens_kurta';
import { womens_dress } from '../../../Data/womens_dress';
import { womens_saree } from '../../../Data/womens_saree';

const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <div className='flex flex-col justify-center py-20 space-y-10 px-5 lg:px-10'>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shoes"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shirts"} />
        <HomeSectionCarousel
          data={womens_saree}
          sectionName={"Women's Saree"}
        />
        <HomeSectionCarousel
          data={womens_dress}
          sectionName={"Women's Dress"}
        />
      </div>
    </div>
  );
};

export default HomePage;
