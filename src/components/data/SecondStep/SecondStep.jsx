import { ErrorMessage } from 'formik';
import { motion } from 'framer-motion';

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

          <ErrorContainerDiv>
            <ErrorMessage
              name="blood"
              component="div"
              className="error"
              style={{ color: 'red', fontSize: '10px' }}
            />
          </ErrorContainerDiv>

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

          <ErrorContainerDiv>
            <ErrorMessage
              name="sex"
              component="div"
              className="error"
              style={{ color: 'red', fontSize: '10px' }}
            />
          </ErrorContainerDiv>

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

          <ErrorContainerDiv>
            <ErrorMessage
              name="levelActivity"
              component="div"
              className="error"
              style={{ color: 'red', fontSize: '10px' }}
            />
          </ErrorContainerDiv>

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
