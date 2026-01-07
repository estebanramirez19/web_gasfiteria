import Carousel from '../components/Carrousel.tsx';
import HorizontalProductCards from '../components/HorizontalProductCard.tsx';
import HorizontalServiceCards from '../components/HorizontalServiceCard.tsx';
import Pagination from '../components/pagination.tsx';
import '../css/HomePage.css';

function HomePage() {
  return (
    <>
      <Carousel />
      <HorizontalProductCards  />
      <HorizontalServiceCards />

      <Pagination/>
    </>
  );
}

export default HomePage;