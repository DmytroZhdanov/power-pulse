import TitlePage from 'components/common/TitlePage/TitlePage';
import ProductsFilters from 'components/products/ProductsFilters/ProductsFilters';
import ProductsList from 'components/products/ProductsList/ProductsList';
import products from './products.json';

export default function Products() {
  return (
    <>
      <div>Products page</div>
      <TitlePage />
      <ProductsFilters products={products} />
      <ProductsList products={products} />
    </>
  );
}
