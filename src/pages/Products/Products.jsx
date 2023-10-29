import TitlePage from 'components/common/TitlePage/TitlePage';
import ProductsFilters from 'components/products/ProductsFilters/ProductsFilters';
import ProductsList from 'components/products/ProductsList/ProductsList';
import { useEffect, useState } from 'react';
import { Background, Wrapper } from './Products.styled';

export function Products() {
  const [filter, setFilter] = useState([]);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1440);

  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 1440);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

<<<<<<< HEAD
export function Products() {
=======
>>>>>>> 8c4cb9b6ebc3df10aa0c8ed3eca6d2f45a3543f9
  return (
    <>
      {isDesktop && <Background />}
      <Wrapper>
        <TitlePage text={'Products'} />
        <ProductsFilters onProductsChange={setFilter} />
      </Wrapper>
      <ProductsList filter={filter} />
    </>
  );
}
