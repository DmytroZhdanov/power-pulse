import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import ErrorHandler from '../../common/ErrorHandler/ErrorHandler';
import { useFetchExercisesSubcategoriesQuery } from '../../../redux/api';
import ExercisesSubcategoriesItem from '../ExercisesSubcategoriesItem/ExercisesSubcategoriesItem';
import {
  GalleryUl,
  ButtonsWrapperUl,
  Button,
  WrapperDiv,
} from './ExercisesSubcategoriesList.styled';

export function ExercisesSubcategoriesList() {
  const category = useOutletContext();

  const { data, isLoading, isError, error } =
    useFetchExercisesSubcategoriesQuery(category);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // we use it to pagination (splitting into pages) when scrolling through a list of elements.
  const handlePageClick = page => {
    setCurrentIndex(page * itemsPerPage);
    setCurrentPage(page);
  };

  // if we change category set up page 1.
  useEffect(() => {
    setCurrentIndex(0);
    setCurrentPage(0);
  }, [category]);

  useEffect(() => {
    const handleResize = () => {
      if (
        (category === 'bodyPart' || category === 'target') &&
        window.innerWidth <= 375
      ) {
        setItemsPerPage(10);
      } else if (window.innerWidth <= 1439) {
        setItemsPerPage(9);
      } else {
        setItemsPerPage(10);
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [category]);

  const totalPages = data ? Math.ceil(data.length / itemsPerPage) : 0;

  const visibleData = data
    ? data.slice(currentIndex, currentIndex + itemsPerPage)
    : [];

  return (
    <WrapperDiv>
      <GalleryUl>
        {visibleData &&
          visibleData.map(item => (
            <ExercisesSubcategoriesItem key={item._id} item={item} />
          ))}
      </GalleryUl>
      {totalPages > 1 && (
        <ButtonsWrapperUl>
          {Array.from({ length: totalPages }, (_, page) => (
            <li key={page}>
              <Button
                onClick={() => handlePageClick(page)}
                disabled={currentIndex / itemsPerPage === page}
                active={currentPage === page}
              ></Button>
            </li>
          ))}
        </ButtonsWrapperUl>
      )}
      <ErrorHandler isLoading={isLoading} isError={isError} error={error} />
    </WrapperDiv>
  );
}
