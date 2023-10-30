import PropTypes from 'prop-types';
import { Item, Label, List, Value } from './InfoOnExerciseList.styled';

const InfoOnExerciseList = ({ exercise }) => {
  const { bodyPart, equipment, name, target, time } = exercise;

  return (
    <List>
      {[
        { label: 'Name', value: name },
        { label: 'Target', value: target },
        { label: 'Body Part', value: bodyPart },
        { label: 'Equipment', value: equipment },
        { label: 'Time', value: `${time} minutes` },
      ].map(({ label, value }) => (
        <Item key={label + value}>
          <Label>{label}</Label>
          <Value>{value}</Value>
        </Item>
      ))}
    </List>
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
