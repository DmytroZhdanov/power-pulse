import BasicModalWindow from '../../components/common/BasicModalWindow/BasicModalWindow';
import AddProductForm from '../../components/products/AddProductForm/AddProductForm';
import AddProductSuccess from '../../components/products/AddProductSuccess/AddProductSuccess';
import TitlePage from 'components/common/TitlePage/TitlePage';
import ProductsFilters from 'components/products/ProductsFilters/ProductsFilters';
import { ProductsList } from 'components/products/ProductsList/ProductsList';
import products from './products.json';

export const Products = () => {
  return (
    <>
      <div>Products page</div>
      <TitlePage />
      <ProductsFilters />
      <ProductsList products={products} />
      <BasicModalWindow>
        <AddProductForm />
      </BasicModalWindow>
      <BasicModalWindow>
        <AddProductSuccess />
      </BasicModalWindow>
    </>
  );
};
