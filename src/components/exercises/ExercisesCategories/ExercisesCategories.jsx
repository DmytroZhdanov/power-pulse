import { Link } from 'react-router-dom';
export default function ExercisesCategories({ title, exercisesList }) {
  return (
    <li>
      <Link to={title}>{title}</Link>
    </li>
  );
}
