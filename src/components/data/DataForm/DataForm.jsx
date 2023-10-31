import { format } from 'date-fns';
import { Form, FormikProvider, useFormik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUpdateUserParamsMutation } from 'src/redux/api';
import { DATA_STEPS } from 'src/utils';
import { ROUTER } from '../../../utils';
import DataBtns from '../DataBtns/DataBtns';
import DataHeader from '../DataHeader/DataHeader';
import { FirstStep } from '../FirstStep/FirstStep';
import { SecondStep } from '../SecondStep/SecondStep';
import { ThirdStep } from '../ThirdStep/ThirdStep';
import { validationSchema } from '../helper/controlData';
import { DataFormContainer } from './DataForm.style';
import { motion } from 'framer-motion';
import { slideInFromLeft } from '../helper/motion';
const DataForm = ({ userParams, step }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isDateSelected, setIsDateSelected] = useState(false);

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
              setIsDateSelected={setIsDateSelected}
              isDateSelected={isDateSelected}
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
