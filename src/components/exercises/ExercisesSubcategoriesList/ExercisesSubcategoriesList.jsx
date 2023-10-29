import React, { useState, useEffect } from 'react';
import { useFetchExercisesSubcategoriesQuery } from '../../../redux/api';
import ExercisesSubcategoriesItem from '../ExercisesSubcategoriesItem/ExercisesSubcategoriesItem';
import {
  List,
  ButtonsWrapper,
  Button,
  ListWrapp,
} from './ExercisesSubcategoriesList.styled';
import { useOutletContext } from 'react-router-dom';

export function ExercisesSubcategoriesList() {
  const category = useOutletContext();

  const { data, error, isLoading } =
    useFetchExercisesSubcategoriesQuery(category);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const handlePageClick = page => {
    setCurrentIndex(page * itemsPerPage);
    setCurrentPage(page);
  };

  useEffect(() => {
    setCurrentIndex(0);
    setCurrentPage(0);
  }, [category]); //при переходе на другуй категорию счетчик страниц начинается с 1

  useEffect(() => {
    // Измените количество элементов на основе ширины экрана и категории
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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const visibleData = data.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <ListWrapp>
      <List>
        {visibleData &&
          visibleData.map(item => (
            <ExercisesSubcategoriesItem key={item._id} it={item} />
          ))}
      </List>
      {totalPages > 1 && (
        <ButtonsWrapper>
          {Array.from({ length: totalPages }, (_, page) => (
            <li key={page}>
              <Button
                onClick={() => handlePageClick(page)}
                disabled={currentIndex / itemsPerPage === page}
                active={currentPage === page}
              ></Button>
            </li>
          ))}
        </ButtonsWrapper>
      )}
    </ListWrapp>
  );
}
