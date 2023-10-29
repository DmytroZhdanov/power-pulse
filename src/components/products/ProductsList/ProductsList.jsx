import ProductsItem from '../ProductsItem/ProductsItem';
<<<<<<< HEAD
import { ProductList } from './ProductsList.styled';
=======
import {
  ProductList,
  DivProducts,
  DefaultText,
  SpanNotFound,
  SpanTry,
} from './ProductsList.styled';

import {
  useLazyFetchAllProductsQuery,
  useFetchUserBloodGroupQuery,
} from '../../../redux/api';
import { useEffect, useState } from 'react';

export default function ProductsList({ filter }) {
  const [products, setProducts] = useState([]);
  const [userGroupBlood, setUserGroupBlood] = useState(null);
  const [getProducts] = useLazyFetchAllProductsQuery();
  const pending = useFetchUserBloodGroupQuery();

  useEffect(() => {
    if (pending.isSuccess) {
      const userBlood = pending.data;
      setUserGroupBlood(userBlood);
    }
  }, [pending]);

  console.log('userGroupBlood:', userGroupBlood);

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
>>>>>>> 8c4cb9b6ebc3df10aa0c8ed3eca6d2f45a3543f9

  return (
<<<<<<< HEAD
    <ProductList>
      {products.map(
        ({ _id, weight, calories, category, title, groupBloodNotAllowed }) => (
          <ProductsItem
            key={_id.$oid}
            title={title}
            weight={weight}
            calories={calories}
            category={category}
            groupBloodNotAllowed={groupBloodNotAllowed}
          ></ProductsItem>
        ),
      )}
      <ProductsItem />
    </ProductList>
=======
    <DivProducts>
      {products.length > 0 ? (
        <ProductList>
          {products.map(({ _id, ...props }) => (
            <ProductsItem
              key={_id}
              props={props}
              userGroupBlood={userGroupBlood}
            ></ProductsItem>
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
>>>>>>> 8c4cb9b6ebc3df10aa0c8ed3eca6d2f45a3543f9
  );
}
