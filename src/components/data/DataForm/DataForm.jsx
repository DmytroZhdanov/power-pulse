import { FirstStep } from '../FirstStep/FirstStep';
import DataBtns from '../DataBtns/DataBtns';
import { useFormik } from 'formik';
import { SecondStep } from '../SecondStep/SecondStep';
import { ThirdStep } from '../ThirdStep/ThirdStep';
import { DATA_STEPS } from 'src/utils';
import * as Yup from 'yup';
import DataHeader from '../DataHeader/DataHeader';
import { DataFormContainer } from './DataForm.style';
import { useNavigate } from 'react-router-dom';
import { ROUTER } from '../../../utils';

const validationSchema = Yup.object().shape({
  currentHeight: Yup.number().moreThan(0).required(),
  currentWeight: Yup.number().moreThan(0).required(),
  desiredWeight: Yup.number().moreThan(0).required(),
  blood: Yup.string().required(),
  gender: Yup.string().required(),
  levelActivity: Yup.string().required(),
});

const DataForm = ({ userParams, step, setUserParams }) => {
  // console.log(userParams);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: userParams,
    validationSchema: validationSchema,
    onSubmit: values => {
      formik.resetForm();
      setUserParams(values);

      navigate(`../${ROUTER.DIARY}`);
    },
  });
  return (
    <DataFormContainer>
      <DataHeader step={step} />

      <form onSubmit={formik.handleSubmit}>
        {step === DATA_STEPS.FIRST && <FirstStep formik={formik} />}
        {step === DATA_STEPS.SECOND && <SecondStep formik={formik} />}
        {step === DATA_STEPS.THIRD && <ThirdStep formik={formik} />}

        <DataBtns step={step} formik={formik} />
      </form>
    </DataFormContainer>
  );
};

export default DataForm;
