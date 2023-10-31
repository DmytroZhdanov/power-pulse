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
import { useState } from 'react';
import { format } from 'date-fns';
import { useUpdateUserParamsMutation } from 'src/redux/api';

const validationSchema = Yup.object().shape({
  height: Yup.number().moreThan(0).required(),
  currentWeight: Yup.number().moreThan(0).required(),
  desiredWeight: Yup.number().moreThan(0).required(),
  blood: Yup.string().required(),
  sex: Yup.string().required(),
  levelActivity: Yup.number().required(),
});

const DataForm = ({ userParams, step, /* setUserParams */ }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const navigate = useNavigate();

  const [updateUserParamsMutation] = useUpdateUserParamsMutation();

  const formik = useFormik({
    initialValues: userParams,
    validationSchema: validationSchema,
    onSubmit: values => {
      const userData = {
        ...values,
        birthday: format(selectedDate, 'yyyy-MM-dd'),
      };
      // console.log('userData:', userData);

      const updateUserParams = async () => {
       /*  const res =  */await updateUserParamsMutation(userData);
        // console.log('res:', res);
      };
      updateUserParams();
      formik.resetForm();
      // setUserParams(userData);

      navigate(`../${ROUTER.DIARY}`);
    },
  });
  return (
    <DataFormContainer>
      <DataHeader step={step} />

      <form onSubmit={formik.handleSubmit}>
        {step === DATA_STEPS.FIRST && (
          <FirstStep
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            formik={formik}
          />
        )}
        {step === DATA_STEPS.SECOND && <SecondStep formik={formik} />}
        {step === DATA_STEPS.THIRD && <ThirdStep formik={formik} />}

        <DataBtns step={step} formik={formik} />
      </form>
    </DataFormContainer>
  );
};

export default DataForm;
