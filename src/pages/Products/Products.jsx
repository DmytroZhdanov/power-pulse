import TitlePage from 'components/common/TitlePage/TitlePage';
import ProductsFilters from 'components/products/ProductsFilters/ProductsFilters';
import ProductsList from 'components/products/ProductsList/ProductsList';
import { useState } from 'react';

export function Products() {
  const [filter, setFilter] = useState([]);

  return (
    <>
      <TitlePage text={Products}/>
      <ProductsFilters onProductsChange={setFilter} />
      <ProductsList filter={filter} />
    </>
  );
}
