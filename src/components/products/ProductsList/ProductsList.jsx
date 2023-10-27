import ProductsItem from '../ProductsItem/ProductsItem';
import { ProductList, DivProducts } from './ProductsList.styled';

import { useLazyFetchAllProductsQuery } from '../../../redux/api';
import { useEffect, useState } from 'react';

export default function ProductsList({ filter }) {
  const [products, setProducts] = useState([]);
  const [getProducts] = useLazyFetchAllProductsQuery();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProducts(filter).unwrap();
        setProducts(response);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, [filter]);

  return (
    <DivProducts>
      <ProductList>
        {products.map(({ _id, ...props }) => (
          <ProductsItem key={_id} props={props}></ProductsItem>
        ))}
      </ProductList>
    </DivProducts>
  );
}
