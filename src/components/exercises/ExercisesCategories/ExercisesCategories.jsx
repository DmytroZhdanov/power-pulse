import { Link } from 'react-router-dom';
import exercises from './exercises.json';
import data from './data.json';
import { useState } from 'react';
import ExercisesSubcategoriesItem from '../ExercisesSubcategoriesItem/ExercisesSubcategoriesItem';
import { List } from './ExercisesSubcategoriesList.styled';

export default function ExercisesCategories() {
  const [activeButton, setActiveButton] = useState('Body parts');
  return (
    <>
      <ul>
        {exercises.map(bod => (
          <li key={bod._id}>
            <button
              type="radio"
              onClick={e => {
                setActiveButton(e.currentTarget.innerText);
              }}
            >
              {bod.title}
            </button>
          </li>
        ))}
      </ul>

      <List>
        {data
          .filter(value => value.filter === activeButton)
          .map(({ name, imgURL, filter, _id }) => (
            <ExercisesSubcategoriesItem
              key={_id}
              name={name}
              imgURL={imgURL}
              filter={filter}
            />
          ))}
      </List>
    </>
  );
}
