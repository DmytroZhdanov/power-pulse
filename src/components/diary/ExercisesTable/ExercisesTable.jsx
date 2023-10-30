import { useEffect, useState } from 'react';
import { useDeleteExerciseMutation } from '../../../redux/api';
import {
  Table,
  TableMainTitles,
  TableTitleTr,
  TableMainTitle,
  TableBody,
  TableTr,
  TableInfoTd,
  DelBtnTable,
  DelIcon,
  TableDiv,
} from './ExercisesTable.styled';
import sprite from '../../../assets/images/sprite/sprite.svg';

export default function ExercisesTable({ diaryExercises, setDiaryExercises }) {
  const [deleteExercise] = useDeleteExerciseMutation();

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 768);
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleDeleteExercise = async id => {
    try {
      await deleteExercise(id);

      const filteredDiaryExercises = diaryExercises.filter(
        exercise => exercise._id !== id,
      );

      setDiaryExercises(filteredDiaryExercises);
    } catch (error) {
      alert('Ops...Something went wrong. Please try again.');
    }
  };

  return (
    <>
      <TableDiv>
        {isDesktop ? (
          <Table>
            <TableMainTitles>
              <TableTitleTr>
                <TableMainTitle>Body Part</TableMainTitle>
                <TableMainTitle>Equipment</TableMainTitle>
                <TableMainTitle>Name</TableMainTitle>
                <TableMainTitle>Target</TableMainTitle>
                <TableMainTitle>Burned Calories</TableMainTitle>
                <TableMainTitle>Time</TableMainTitle>
              </TableTitleTr>
            </TableMainTitles>

            {diaryExercises.map(exercise => {
              return (
                <TableBody key={exercise._id}>
                  <TableTr>
                    <TableInfoTd>{exercise.bodyPart}</TableInfoTd>
                    <TableInfoTd>{exercise.equipment}</TableInfoTd>
                    <TableInfoTd>{exercise.name}</TableInfoTd>
                    <TableInfoTd>{exercise.target}</TableInfoTd>
                    <TableInfoTd>{exercise.calories}</TableInfoTd>
                    <TableInfoTd>{exercise.time}</TableInfoTd>
                    <td>
                      <DelBtnTable
                        onClick={() => {
                          handleDeleteExercise(exercise._id);
                        }}
                      >
                        <DelIcon>
                          <use href={`${sprite}#delete`}></use>
                        </DelIcon>
                      </DelBtnTable>
                    </td>
                  </TableTr>
                </TableBody>
              );
            })}
          </Table>
        ) : (
          // мапаєш і повертаєш те, що нижч
          <>
            {diaryExercises.map(exercise => {
              return (
                <Table key={exercise._id}>
                  <TableMainTitles>
                    <TableTitleTr>
                      <TableMainTitle>Body Part</TableMainTitle>
                      <TableMainTitle>Equipment</TableMainTitle>
                      <TableMainTitle>Name</TableMainTitle>
                      <TableMainTitle>Target</TableMainTitle>
                      <TableMainTitle>Burned Calories</TableMainTitle>
                      <TableMainTitle>Time</TableMainTitle>
                    </TableTitleTr>
                  </TableMainTitles>
                  <TableBody>
                    <TableTr>
                      <TableInfoTd>{exercise.bodyPart}</TableInfoTd>
                      <TableInfoTd>{exercise.equipment}</TableInfoTd>
                      <TableInfoTd>{exercise.name}</TableInfoTd>
                      <TableInfoTd>{exercise.target}</TableInfoTd>
                      <TableInfoTd>{exercise.calories}</TableInfoTd>
                      <TableInfoTd>{exercise.time}</TableInfoTd>
                      <td>
                        <DelBtnTable
                          onClick={() => {
                            handleDeleteExercise(exercise._id);
                          }}
                        >
                          <DelIcon>
                            <use href={`${sprite}#delete`}></use>
                          </DelIcon>
                        </DelBtnTable>
                      </td>
                    </TableTr>
                  </TableBody>
                </Table>
              );
            })}
          </>
          // Кінець повернення з мапу
        )}
      </TableDiv>
    </>
  );
}
