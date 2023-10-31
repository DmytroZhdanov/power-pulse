import ProductsItem from '../ProductsItem/ProductsItem';
import {
  ProductList,
  //  DivProducts,
  DefaultText,
  SpanNotFound,
  SpanTry,
} from './ProductsList.styled';

import {
  useLazyFetchAllProductsQuery,
  useFetchUserBloodGroupQuery,
} from '../../../redux/api';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

/**
 * The ProductsList component represents a list of products and displays them according to the passed filter.
 *
 * @param {object} filter The filter object contains the parameters by which the user wants to filter the list of products.
 * @returns {JSX.Element} A list of products or a message that there are no results.
 */
export default function ProductsList({ filter }) {
  const [products, setProducts] = useState([]);
  const [userGroupBlood, setUserGroupBlood] = useState(null);
  const [getProducts] = useLazyFetchAllProductsQuery();

  const pending = useFetchUserBloodGroupQuery();
  const { isSuccess, data } = pending;

  /**
   * Updates the user's blood type based on a successful request to the backend.
   *
   * @param {boolean} isSuccess The success of the request to the backend.
   */

  useEffect(() => {
    if (isSuccess) {
      const userBlood = data;
      setUserGroupBlood(userBlood);
    }
  }, [data, isSuccess]);

  /**
   * fetchData Loads the list of products from the backend according to the specified filter.
   *
   * @function fetchData
   * @param {object} filter The filter object containing parameters by which the user wishes to filter the list of products.
   * @returns {array} The list of products or a message indicating no results.
   */

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getProducts(filter).unwrap();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, [filter, getProducts]);

  return (
    <>
      {products.length > 0 ? (
        <ProductList>
          {products.map(props => (
            <ProductsItem
              key={props._id}
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
    </>
  );
}

ProductsList.propTypes = {
  filter: PropTypes.object,
};
