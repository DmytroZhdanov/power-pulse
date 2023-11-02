import { useEffect, useState } from 'react';

import TitlePage from 'components/common/TitlePage/TitlePage';
import ProductsFilters from 'components/products/ProductsFilters/ProductsFilters';
import ProductsList from 'components/products/ProductsList/ProductsList';
import { BackgroundDiv, WrapperDiv } from './Products.styled';

export function Products() {
  const [filter, setFilter] = useState(null);
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
  console.log(filter);
  return (
    <>
      {isDesktop && (
        <BackgroundDiv filter={filter?.category.split(' ').join('')} />
      )}
      <WrapperDiv>
        <TitlePage text={'Products'} />

        <ProductsFilters onProductsChange={setFilter} />
      </WrapperDiv>

      <ProductsList filter={filter} />
    </>
  );
}
