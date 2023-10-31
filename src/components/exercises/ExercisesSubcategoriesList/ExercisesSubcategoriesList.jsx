import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

import ExercisesSubcategoriesItem from 'components/exercises/ExercisesSubcategoriesItem/ExercisesSubcategoriesItem';
import ErrorHandler from 'components/common/ErrorHandler/ErrorHandler';
import {
  GalleryUl,
  ButtonsWrapperUl,
  Button,
  WrapperDiv,
} from './ExercisesSubcategoriesList.styled';

import { useFetchExercisesSubcategoriesQuery } from 'src/redux/api';

export function ExercisesSubcategoriesList() {
  const category = useOutletContext();

  const { data, isLoading, isError, error } =
    useFetchExercisesSubcategoriesQuery(category);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // For pagination (splitting into pages) when scrolling through a list of elements.
  const handlePageClick = page => {
    setCurrentIndex(page * itemsPerPage);
    setCurrentPage(page);
  };

  // On change category set up page 1.
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
      } else if (window.innerWidth < 1440) {
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
