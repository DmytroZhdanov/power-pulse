import TitlePage from 'components/common/TitlePage/TitlePage';
import ProductsFilters from 'components/products/ProductsFilters/ProductsFilters';
import ProductsList from 'components/products/ProductsList/ProductsList';
import { useState } from 'react';

export function Products() {
  const [filter, setFilter] = useState([]);

  const handleProductsChange = newFilter => {
    setFilter(newFilter);
  };

  return (
    <>
      <TitlePage />
      <ProductsFilters onProductsChange={handleProductsChange} />
      <ProductsList filter={filter} />
    </>
  );
}
