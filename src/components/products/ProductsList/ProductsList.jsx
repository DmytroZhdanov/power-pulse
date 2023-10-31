import ProductsItem from '../ProductsItem/ProductsItem';
import {
  ProductList,
  DivProducts,
  DefaultText,
  SpanNotFound,
  SpanTry,
  WrapLi,
} from './ProductsList.styled';

import {
  useLazyFetchAllProductsQuery,
  useFetchUserBloodGroupQuery,
} from '../../../redux/api';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ErrorHandler from '../../common/ErrorHandler/ErrorHandler';
import { useInView } from 'react-intersection-observer';

/**
 * The ProductsList component represents a list of products and displays them according to the passed filter.
 *
 * @param {object} filter The filter object contains the parameters by which the user wants to filter the list of products.
 * @returns {JSX.Element} A list of products or a message that there are no results.
 */
export default function ProductsList({ filter }) {
  const [products, setProducts] = useState([]);
  const [userGroupBlood, setUserGroupBlood] = useState(null);
  const [page, setPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [
    getProducts,
    { isLoading: isGettingLazy, isError: gettingErrorLazy, error: myErrorLazy },
  ] = useLazyFetchAllProductsQuery();

  const pending = useFetchUserBloodGroupQuery();
  const { isSuccess, data } = pending;
  const { ref } = useInView({
    onChange: inView => inView && setFetching(true),
  });
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
    if (fetching) {
      const fetchData = async () => {
        try {
          const { data } = await getProducts(filter, page).unwrap();
          console.log(data);

          if (data.length === 0) {
            return;
          }
          page === 1
            ? setProducts([...data])
            : setProducts(prev => [...prev, ...data]);
          setFetching(false);
          setPage(page + 1);
        } catch (error) {
          console.error('Error fetching data:', error.message);
        }
      };

      fetchData();
    }
  }, [filter, getProducts, page, fetching]);

  return (
    <DivProducts>
      {products.length > 0 ? (
        <ProductList>
          {products.map(({ _id, ...props }, index) => (
            <WrapLi
              key={index}
              ref={index === products.length - 1 ? ref : null}
            >
              <ProductsItem
                key={_id}
                props={props}
                userGroupBlood={userGroupBlood}
              ></ProductsItem>
            </WrapLi>
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
      <ErrorHandler
        isLoading={isGettingLazy}
        isError={gettingErrorLazy}
        error={myErrorLazy}
      />
    </DivProducts>
  );
}

ProductsList.propTypes = {
  filter: PropTypes.object,
};
