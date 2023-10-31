import { FirstStep } from '../FirstStep/FirstStep';
import DataBtns from '../DataBtns/DataBtns';
import { FormikProvider, useFormik, Form } from 'formik';
import { SecondStep } from '../SecondStep/SecondStep';
import { ThirdStep } from '../ThirdStep/ThirdStep';
import { DATA_STEPS } from 'src/utils';
import DataHeader from '../DataHeader/DataHeader';
import { DataFormContainer } from './DataForm.style';
import { useNavigate } from 'react-router-dom';
import { ROUTER } from '../../../utils';
import { useState } from 'react';
import { format } from 'date-fns';
import { useUpdateUserParamsMutation } from 'src/redux/api';
import { validationSchema } from '../helper/controlData';

import { motion } from 'framer-motion';
import { slideInFromLeft } from '../helper/motion';

const DataForm = ({ userParams, step /* setUserParams */ }) => {
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

      const updateUserParams = async () => {
        /*  const res =  */
        await updateUserParamsMutation(userData);
      };
      updateUserParams();
      formik.resetForm();

      navigate(`../${ROUTER.DIARY}`);
    },
  });
  return (
    <motion.div
      key={step}
      variants={slideInFromLeft}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ duration: 0.5 }}
    >
      <DataFormContainer>
        <DataHeader step={step} />
        <FormikProvider value={formik}>
          <Form>
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
          </Form>
        </FormikProvider>
      </DataFormContainer>
    </motion.div>
  );
};

export default DataForm;
