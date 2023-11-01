import { ErrorMessage } from 'formik';
import {
  RadioContainer1,
  RadioLabel,
  ErrorContainer,
} from '../DataForm/DataForm.style';
import DataInput from '../DataInput/DataInput';
import {
  radioInputActivityData,
  radioInputBloodData,
  radioInputSexData,
} from '../helper/inputData';
import { motion } from 'framer-motion';
import { listVAriatns } from '../helper/motion';

export function SecondStep({ formik }) {
  return (
    <>
      <RadioContainer1>
        <fieldset>
          <legend>Blood:</legend>

          <ErrorContainer>
            <ErrorMessage
              name="blood"
              component="div"
              className="error"
              style={{ color: 'red', fontSize: '10px' }}
            />
          </ErrorContainer>
          {radioInputBloodData.map((input, i) => (
            <motion.div
              custom={i}
              key={input.id}
              variants={listVAriatns}
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

          <ErrorContainer>
            <ErrorMessage
              name="sex"
              component="div"
              className="error"
              style={{ color: 'red', fontSize: '10px' }}
            />
          </ErrorContainer>
          {radioInputSexData.map((input, i) => (
            <motion.div
              custom={i}
              key={input.id}
              variants={listVAriatns}
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
      </RadioContainer1>

      <RadioContainer1>
        <fieldset>
          <legend>Level Activity:</legend>

          <ErrorContainer>
            <ErrorMessage
              name="levelActivity"
              component="div"
              className="error"
              style={{ color: 'red', fontSize: '10px' }}
            />
          </ErrorContainer>
          {radioInputActivityData.map((input, i) => (
            <motion.div
              custom={i}
              key={input.id}
              variants={listVAriatns}
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
      </RadioContainer1>
    </>
  );
}
