import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';

import ProductsItem from 'components/products/ProductsItem/ProductsItem';
import ErrorHandler from 'components/common/ErrorHandler/ErrorHandler';
import {
  ProductListUl,
  DefaultTextP,
  SpanNotFound,
  SpanTry,
} from './ProductsList.styled';

import {
  useLazyFetchAllProductsQuery,
  useFetchUserBloodGroupQuery,
} from 'src/redux/api';

/**
 * The ProductsList component represents a list of products and displays them according to the passed filter.
 *
 * @param {object} filter The filter object contains the parameters by which the user wants to filter the list of products.
 * @returns {JSX.Element} A list of products or a message that there are no results.
 */
export default function ProductsList({ filter }) {
  const [products, setProducts] = useState([]);
  const [userGroupBlood, setUserGroupBlood] = useState(null);

  const [currentFilter, setCurrentFilter] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [newResponse, setNewResponse] = useState(true);
  const productListRef = useRef(null);
  const [
    getProducts,
    { isLoading: isGettingLazy, isError: gettingErrorLazy, error: myErrorLazy },
  ] = useLazyFetchAllProductsQuery();

  const {
    isSuccess,
    data: userBlood,
    isLoading: isUserBloodLoading,
    isError: isUserBloodError,
    error: userBloodError,
  } = useFetchUserBloodGroupQuery();

  const { ref } = useInView({
    onChange: inView => {
      console.log(newResponse);
      if (inView && newResponse) {
        setCurrentPage(prevPage => prevPage + 1);
      }
    },
  });

  /**
   * Updates the user's blood type based on a successful request to the backend.
   *
   * @param {boolean} isSuccess The success of the request to the backend.
   */
  useEffect(() => {
    if (isSuccess) {
      setUserGroupBlood(userBlood);
    }
  }, [isSuccess, userBlood]);

  useEffect(() => {
    if (filter !== currentFilter) {
      setCurrentPage(1);
      setNewResponse(true);
      setCurrentFilter(filter);
    }
  }, [currentFilter, filter]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProducts({
          page: currentPage,
          ...currentFilter,
        }).unwrap();

        if (response.data.length < 18) {
          setNewResponse(false);
        }

        if (currentPage === 1) {
          setProducts([...response.data]);
        } else {
          setProducts(prev => [...prev, ...response.data]);
        }
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    newResponse && currentFilter && fetchData();
  }, [getProducts, currentPage, currentFilter, newResponse]);

  return (
    <>
      {products.length > 0 ? (
        <ProductListUl>
          {products.map((props, index) => (
            <li key={index} ref={index === products.length - 1 ? ref : null}>
              <ProductsItem
                key={props._id}
                props={props}
                userGroupBlood={userGroupBlood}
                ref={productListRef}
              ></ProductsItem>
            </li>
          ))}
        </ProductListUl>
      ) : (
        <>
          <DefaultTextP>
            <SpanNotFound>Sorry, no results were found</SpanNotFound> for the
            product filters you selected. You may want to consider other search
            options to find the product you want. Our range is wide and you have
            the opportunity to find more options that suit your needs.
          </DefaultTextP>

          <SpanTry>Try changing the search parameters.</SpanTry>
        </>
      )}

      <ErrorHandler
        isLoading={isGettingLazy}
        isError={gettingErrorLazy}
        error={myErrorLazy}
      />

      <ErrorHandler
        isLoading={isUserBloodLoading}
        isError={isUserBloodError}
        error={userBloodError}
      />
    </>
  );
}

ProductsList.propTypes = {
  filter: PropTypes.object,
};
