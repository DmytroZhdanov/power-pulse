import TitlePage from 'components/common/TitlePage/TitlePage';
import ProductsFilters from 'components/products/ProductsFilters/ProductsFilters';
import ProductsList from 'components/products/ProductsList/ProductsList';
import { useState } from 'react';

export function Products() {
  const [products, setProducts] = useState([]);

  const handleProductsChange = newProducts => {
    setProducts(newProducts);
  };

  return (
    <>
      <TitlePage />
      <ProductsFilters onProductsChange={handleProductsChange} />
      <ProductsList products={products} />
    </>
  );
}
