import { ErrorMessage } from 'formik';
import {
  RadioContainer1,
  RadioLabel,
  ErrorContainer,
  SuccessMessage,
} from '../DataForm/DataForm.style';
import DataInput from '../DataInput/DataInput';
import {
  radioInputActivityData,
  radioInputBloodData,
  radioInputSexData,
} from '../helper/inputData';
import { SecondStepContainer } from './SecondStep.styled';
import Icon from '../../common/IconsComp/Icon';

export function SecondStep({ formik }) {
  return (
    <SecondStepContainer>
      <RadioContainer1>
        <fieldset>
          <legend>Blood:</legend>
          {/* {formik.touched.blood && !formik.errors.blood && (
            <SuccessMessage>
              <Icon name={'checkmark'} />
              <p> Blood is valid</p>
            </SuccessMessage>
          )} */}
          <ErrorContainer>
            <ErrorMessage
              name="blood"
              component="div"
              className="error"
              style={{ color: 'red', fontSize: '10px' }}
            />
          </ErrorContainer>
          {radioInputBloodData.map(input => (
            <RadioLabel key={input.id}>
              <DataInput
                {...input}
                onChange={formik.handleChange}
                checked={formik.values.blood === input.value}
              />
              <span></span>
              {input.value}
            </RadioLabel>
          ))}
        </fieldset>

        <fieldset>
          <legend>Sex:</legend>
          {/* {formik.touched.sex && !formik.errors.sex && (
            <SuccessMessage>
              <Icon name={'checkmark'} />
              <p> Sex is valid</p>
            </SuccessMessage>
          )} */}
          <ErrorContainer>
            <ErrorMessage
              name="sex"
              component="div"
              className="error"
              style={{ color: 'red', fontSize: '10px' }}
            />
          </ErrorContainer>
          {radioInputSexData.map(input => (
            <RadioLabel htmlFor={input.htmlFor} key={input.id}>
              <DataInput
                {...input}
                onChange={formik.handleChange}
                checked={formik.values.sex === input.value}
              />
              <span></span>
              {input.label}
            </RadioLabel>
          ))}
        </fieldset>
      </RadioContainer1>

      <RadioContainer1>
        <fieldset>
          <legend>Level Activity:</legend>
          {/* {formik.touched.levelActivity && !formik.errors.levelActivity && (
            <SuccessMessage>
              <Icon name={'checkmark'} />
              <p> Level Activity is valid</p>
            </SuccessMessage>
          )} */}
          <ErrorContainer>
            <ErrorMessage
              name="levelActivity"
              component="div"
              className="error"
              style={{ color: 'red', fontSize: '10px' }}
            />
          </ErrorContainer>
          {radioInputActivityData.map(input => (
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
          ))}
        </fieldset>
      </RadioContainer1>
    </SecondStepContainer>
  );
}
