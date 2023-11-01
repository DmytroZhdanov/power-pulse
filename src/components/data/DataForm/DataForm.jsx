import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { Form, FormikProvider, useFormik } from 'formik';
import { motion } from 'framer-motion';

import DataHeader from 'components/data/DataHeader/DataHeader';
import { FirstStep } from 'components/data/FirstStep/FirstStep';
import { SecondStep } from 'components/data/SecondStep/SecondStep';
import DataBtns from 'components/data/DataBtns/DataBtns';
import { DataFormContainerDiv } from './DataForm.style';

import { validationSchema } from 'components/data/helper/controlData';
import { slideInFromLeft } from 'components/data/helper/motion';
import { useUpdateUserParamsMutation } from 'src/redux/api';
import { DATA_STEPS, ROUTER } from 'src/utils';

const DataForm = ({ userParams, step }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isDateSelected, setIsDateSelected] = useState(false);

  const navigate = useNavigate();

  const [updateUserParamsMutation] = useUpdateUserParamsMutation();

  const formik = useFormik({
    initialValues: userParams,
    validationSchema: validationSchema,
    onSubmit: async values => {
      const userData = {
        ...values,
        birthday: format(selectedDate, 'yyyy-MM-dd'),
      };

      await updateUserParamsMutation(userData);
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
      <DataFormContainerDiv>
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

            <DataBtns step={step} formik={formik} />
          </Form>
        </FormikProvider>
      </DataFormContainerDiv>
    </motion.div>
  );
};

export default DataForm;
