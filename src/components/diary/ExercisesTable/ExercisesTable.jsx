import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

import {
  TableDiv,
  Table,
  TableMainTitlesThead,
  TableTitleTr,
  TableMainTitleTh,
  TableBody,
  TableInfoTd,
  DelBtnTableButton,
  DelIcon,
} from './ExercisesTable.styled';

import { useDeleteExerciseMutation } from 'src/redux/api';
import sprite from 'src/assets/images/sprite/sprite.svg';
import { useTranslation } from 'react-i18next';
import { setStates } from 'src/redux/states/statesSlice';

export default function ExercisesTable({ diaryExercises, setDiaryExercises }) {
  const [deleteExercise, { isLoading, isError, error }] =
    useDeleteExerciseMutation();

  const dispatch = useDispatch();

  const [isTableDesk, setIsTableDesk] = useState(window.innerWidth >= 768);

  const { t } = useTranslation(['Diary','common']);
  const titleList = t(`content.exercises.list.titles`, {
    ns: 'Diary',
    returnObjects: true,
  });

  useEffect(() => {
    dispatch(setStates({ isLoading, isError, error }));
  }, [dispatch, error, isError, isLoading]);

  const handleResize = () => {
    setIsTableDesk(window.innerWidth >= 768);
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
      console.log(error);
    }
  };

  const convertInMin = sec => {
    return `${Math.floor(sec / 60)} ${t('time.minShort', { ns: 'common' })} ${
      sec % 60 === 0 ? '' : (sec % 60) + t('time.secShort', { ns: 'common' })
    }`;
  };

  return (
    <>
      <TableDiv>
        {isTableDesk ? (
          <Table>
            <TableMainTitlesThead>
              <TableTitleTr>
                {titleList.map(title => (
                  <TableMainTitleTh key={title}>{title}</TableMainTitleTh>
                ))}
              </TableTitleTr>
            </TableMainTitlesThead>

            <AnimatePresence>
              {diaryExercises.map(exercise => {
                return (
                  <TableBody
                    as={motion.tbody}
                    initial={{ x: 900 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                    exit={{ x: -900 }}
                    key={exercise._id}
                  >
                    <tr>
                      <TableInfoTd>{exercise.bodyPart}</TableInfoTd>

                      <TableInfoTd>{exercise.equipment}</TableInfoTd>

                      <TableInfoTd>{exercise.name}</TableInfoTd>

                      <TableInfoTd>{exercise.target}</TableInfoTd>

                      <TableInfoTd>{exercise.calories}</TableInfoTd>

                      <TableInfoTd>{convertInMin(exercise.time)}</TableInfoTd>

                      <td>
                        <DelBtnTableButton
                          onClick={() => {
                            handleDeleteExercise(exercise._id);
                          }}
                        >
                          <DelIcon>
                            <use href={`${sprite}#delete`}></use>
                          </DelIcon>
                        </DelBtnTableButton>
                      </td>
                    </tr>
                  </TableBody>
                );
              })}
            </AnimatePresence>
          </Table>
        ) : (
          <>
            <AnimatePresence>
              {diaryExercises.map(exercise => {
                return (
                  <Table
                    initial={{ x: 1300 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                    exit={{ x: -1700 }}
                    as={motion.table}
                    key={exercise._id}
                  >
                    <TableMainTitlesThead>
                      <TableTitleTr>
                        {titleList.map(title => (
                          <TableMainTitleTh key={title}>
                            {title}
                          </TableMainTitleTh>
                        ))}
                      </TableTitleTr>
                    </TableMainTitlesThead>

                    <TableBody>
                      <tr>
                        <TableInfoTd>{exercise.bodyPart}</TableInfoTd>

                        <TableInfoTd>{exercise.equipment}</TableInfoTd>

                        <TableInfoTd>{exercise.name}</TableInfoTd>

                        <TableInfoTd>{exercise.target}</TableInfoTd>

                        <TableInfoTd>{exercise.calories}</TableInfoTd>

                        <TableInfoTd>{convertInMin(exercise.time)}</TableInfoTd>

                        <td>
                          <DelBtnTableButton
                            onClick={() => {
                              handleDeleteExercise(exercise._id);
                            }}
                          >
                            <DelIcon>
                              <use href={`${sprite}#delete`}></use>
                            </DelIcon>
                          </DelBtnTableButton>
                        </td>
                      </tr>
                    </TableBody>
                  </Table>
                );
              })}
            </AnimatePresence>
          </>
        )}
      </TableDiv>
    </>
  );
}

ExercisesTable.propTypes = {
  setDiaryExercises: PropTypes.func.isRequired,
  diaryExercises: PropTypes.arrayOf(
    PropTypes.shape({
      bodyPart: PropTypes.string.isRequired,
      calories: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      equipment: PropTypes.string.isRequired,
      exercise_ID: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      target: PropTypes.string.isRequired,
      time: PropTypes.number.isRequired,
      _id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
