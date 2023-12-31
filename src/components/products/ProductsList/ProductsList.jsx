import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';

import ProductsItem from 'components/products/ProductsItem/ProductsItem';
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
import { setStates } from 'src/redux/states/statesSlice';

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
  const productListRef = useRef();
  const dispatch = useDispatch();
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
      if (inView && newResponse) {
        setCurrentPage(prevPage => prevPage + 1);
      }
    },
  });

  useEffect(() => {
    dispatch(
      setStates({
        isLoading: isGettingLazy || isUserBloodLoading,
        isError: gettingErrorLazy || isUserBloodError,
        error: myErrorLazy || userBloodError,
      }),
    );
  }, [
    dispatch,
    gettingErrorLazy,
    isGettingLazy,
    isUserBloodError,
    isUserBloodLoading,
    myErrorLazy,
    userBloodError,
  ]);

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
    if (productListRef.current) {
      productListRef.current.scrollTop = 0;
    }
    setCurrentPage(1);
    setNewResponse(true);
    setCurrentFilter(filter);
  }, [filter, ref]);

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
        <ProductListUl ref={productListRef}>
          {products.map((props, index) => (
            <li key={index} ref={index === products.length - 1 ? ref : null}>
              <ProductsItem
                key={props._id}
                props={props}
                userGroupBlood={userGroupBlood}
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
    </>
  );
}

ProductsList.propTypes = {
  filter: PropTypes.shape({
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    recommended: PropTypes.oneOfType([
      PropTypes.oneOf(['']),
      PropTypes.arrayOf(PropTypes.oneOf([true, false])),
    ]),
  }),
};
