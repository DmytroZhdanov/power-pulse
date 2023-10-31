export const textInputData = [
  {
    htmlFor: 'height',
    type: 'text',
    id: 'height',
    name: 'height',
    placeholder: 'Current Height',
    span: 'Height',
    errorText: 'Height is a required number',
  },
  {
    htmlFor: 'currentWeight',
    type: 'text',
    id: 'currentWeight',
    name: 'currentWeight',
    placeholder: 'Current Weight',
    span: 'Weight',
    errorText: 'Weight is a required number',
  },
  {
    htmlFor: 'desiredWeight',
    type: 'text',
    id: 'desiredWeight',
    name: 'desiredWeight',
    placeholder: 'Desired Weight',
    span: 'Weight',
    errorText: 'Weight is a required number',
  },
];

export const radioInputBloodData = [
  {
    type: 'radio',
    id: 'blood_1',
    name: 'blood',
    value: '1',
  },
  {
    type: 'radio',
    id: 'blood_2',
    name: 'blood',
    value: '2',
  },
  {
    type: 'radio',
    id: 'blood_3',
    name: 'blood',
    value: '3',
  },
  {
    type: 'radio',
    id: 'blood_4',
    name: 'blood',
    value: '4',
  },
];

export const radioInputSexData = [
  {
    htmlFor: 'genderMale',
    type: 'radio',
    id: 'genderMale',
    name: 'sex',
    value: 'male',
    label: 'Male',
  },
  {
    htmlFor: 'genderFemale',
    type: 'radio',
    id: 'genderFemale',
    name: 'sex',
    value: 'female',
    label: 'Female',
  },
];

export const radioInputActivityData = [
  {
    type: 'radio',
    value:1,
    id: 'levelActivity_1',
    name: 'levelActivity',
    valueText: 'Sedentary lifestyle (little or no physical activity)',
  },
  {
    type: 'radio',
    value:2,
    id: 'levelActivity_2',
    name: 'levelActivity',
    valueText: 'Light activity (light exercises/sports 1-3 days per week)',
  },
  {
    type: 'radio',
    value:3,
    id: 'levelActivity_3',
    name: 'levelActivity',
    valueText: 'Moderately active (moderate exercises/sports 3-5 days per week)',
  },
  {
    type: 'radio',
    value:4,
    id: 'levelActivity_4',
    name: 'levelActivity',
    valueText: 'Very active (intense exercises/sports 6-7 days per week)',
  },
  {
    type: 'radio',
    value:5,
    id: 'levelActivity_5',
    name: 'levelActivity',
    valueText:
      'Extremely active (very strenuous exercises/sports and physical work)',
  },
];


export const slideInFromLeft = {
  hidden: { x: '-100%' },
  visible: { x: '0%' },
};