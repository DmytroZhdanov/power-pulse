import ProductsItem from '../ProductsItem/ProductsItem';
import {
  ProductList,
  DivProducts,
  DefaultText,
  SpanNotFound,
  SpanTry,
} from './ProductsList.styled';

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
      {products.length > 0 ? (
        <ProductList>
          {products.map(({ _id, ...props }) => (
            <ProductsItem key={_id} props={props}></ProductsItem>
          ))}
        </ProductList>
      ) : (
        <>
          <DefaultText>
            <SpanNotFound>Sorry, no results were found</SpanNotFound> for the
            product filters you selected. You may want to consider other search
            options to find the product you want. Our range is wide and you have
            the opportunity to find more options that suit your needs.
          </DefaultText>
          <SpanTry>Try changing the search parameters.</SpanTry>
        </>
      )}
    </DivProducts>
  );
}
