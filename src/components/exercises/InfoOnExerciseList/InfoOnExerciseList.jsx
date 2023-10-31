import PropTypes from 'prop-types';
import { ItemLi, LabelP, ListUl, ValueP } from './InfoOnExerciseList.styled';

const InfoOnExerciseList = ({ exercise }) => {
  const { bodyPart, equipment, name, target, time } = exercise;

  return (
    <ListUl>
      {[
        { label: 'Name', value: name },
        { label: 'Target', value: target },
        { label: 'Body Part', value: bodyPart },
        { label: 'Equipment', value: equipment },
        { label: 'Time', value: `${time} minutes` },
      ].map(({ label, value }) => (
        <ItemLi key={label + value}>
          <LabelP>{label}</LabelP>
          <ValueP>{value}</ValueP>
        </ItemLi>
      ))}
    </ListUl>
  );
};
export default InfoOnExerciseList;

InfoOnExerciseList.propTypes = {
  exercise: PropTypes.shape({
    bodyPart: PropTypes.string.isRequired,
    equipment: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    target: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
  }).isRequired,
};
