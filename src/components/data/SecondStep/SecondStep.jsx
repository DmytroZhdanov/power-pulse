import { ErrorMessage } from 'formik';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import {
  RadioContainer1Div,
  RadioLabel,
  ErrorContainerDiv,
} from 'components/data/DataForm/DataForm.style';
import DataInput from 'components/data/DataInput/DataInput';

import {
  radioInputActivityData,
  radioInputBloodData,
  radioInputSexData,
} from 'components/data/helper/inputData';
import { listVariants } from 'components/data/helper/motion';

export function SecondStep({ formik }) {
  return (
    <>
      <RadioContainer1Div>
        <fieldset>
          <legend>Blood:</legend>

          <motion.div
            key={formik.errors.blood}
            variants={listVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.3 }}
          >
            <ErrorContainerDiv>
              <ErrorMessage
                name="blood"
                component="div"
                className="error"
                style={{ color: 'red', fontSize: '10px' }}
              />
            </ErrorContainerDiv>
          </motion.div>

          {radioInputBloodData.map((input, i) => (
            <motion.div
              custom={i}
              key={input.id}
              variants={listVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <RadioLabel>
                <DataInput
                  {...input}
                  onChange={formik.handleChange}
                  checked={formik.values.blood === input.value}
                />
                <span></span>
                {input.value}
              </RadioLabel>
            </motion.div>
          ))}
        </fieldset>

        <fieldset>
          <legend>Sex:</legend>

          <motion.div
            key={formik.errors.sex}
            variants={listVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.3 }}
          >
            <ErrorContainerDiv>
              <ErrorMessage
                name="sex"
                component="div"
                className="error"
                style={{ color: 'red', fontSize: '10px' }}
              />
            </ErrorContainerDiv>
          </motion.div>

          {radioInputSexData.map((input, i) => (
            <motion.div
              custom={i}
              key={input.id}
              variants={listVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <RadioLabel htmlFor={input.htmlFor}>
                <DataInput
                  {...input}
                  onChange={formik.handleChange}
                  checked={formik.values.sex === input.value}
                />
                <span></span>
                {input.label}
              </RadioLabel>
            </motion.div>
          ))}
        </fieldset>
      </RadioContainer1Div>

      <RadioContainer1Div>
        <fieldset>
          <legend>Level Activity:</legend>

          <motion.div
            key={formik.errors.levelActivity}
            variants={listVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.3 }}
          >
            <ErrorContainerDiv>
              <ErrorMessage
                name="levelActivity"
                component="div"
                className="error"
                style={{ color: 'red', fontSize: '10px' }}
              />
            </ErrorContainerDiv>
          </motion.div>

          {radioInputActivityData.map((input, i) => (
            <motion.div
              custom={i}
              key={input.id}
              variants={listVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <RadioLabel htmlFor={input.htmlFor} key={input.id}>
                <DataInput
                  {...input}
                  onChange={() =>
                    formik.setFieldValue('levelActivity', input.value)
                  }
                  checked={formik.values.levelActivity === input.value}
                />
                <span></span>
                {input.valueText}
              </RadioLabel>
            </motion.div>
          ))}
        </fieldset>
      </RadioContainer1Div>
    </>
  );
}

SecondStep.propTypes = {
  formik: PropTypes.shape({
    values: PropTypes.shape({
      blood: PropTypes.string.isRequired,
      sex: PropTypes.string.isRequired,
      levelActivity: PropTypes.string.isRequired,
    }).isRequired,
    handleChange: PropTypes.func,
    setFieldValue: PropTypes.func,
  }),
};
