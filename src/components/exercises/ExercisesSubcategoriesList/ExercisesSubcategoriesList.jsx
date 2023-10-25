import React, { useEffect } from 'react';

export function ExercisesSubcategoriesList() {
  return <div></div>;
}
// export function ExercisesList() {
//   const { subcategory } = useParams();
//   const [result, setResult] = useState();

//   const [fetchAllExercises, { data }] = useLazyFetchAllExercisesQuery();
//   useEffect(() => {
//     const fetch = async () => {
//       const subcategories = await fetchAllExercises().unwrap();
//     };
//     try {
//       fetch();
//       setResult(data);
//     } catch (error) {
//       console.log();
//     }
//   }, [fetchAllExercises]);

//   console.log(result);
//   return (
//     <ExerciseList>
//       {data.map(({ _id, name, bodyPart, burnedCalories, target }) => (
//         <ExercisesItem
//           key={_id.$oid}
//           name={name}
//           bodyPart={bodyPart}
//           burnedCalories={burnedCalories}
//           target={target}
//         ></ExercisesItem>
//       ))}
//     </ExerciseList>
//   );
// }
