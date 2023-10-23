import styled from '@emotion/styled';
import { Form } from 'formik';

export const Container = styled(Form)`
  padding-top: 127px;

  @media screen and (min-width: 768px) {
    padding-top: 189px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 200px;
  }
`;

export const Text = styled.p`
  margin-top: 14px;

  @media screen and (min-width: 375px) {
    width: 335px;
  }
  @media screen and (min-width: 768px) {
    width: 496px;
  }
`;

export const Inputs = styled.div`
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;

  @media screen and (min-width: 768px) {
    margin-top: 32px;
    gap: 20px;
  }
`;

export const Button = styled.button`
  margin-top: 28px;
  display: flex;
  padding: 12px 40px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  background: var(--orange, #e6533c);

  @media screen and (min-width: 768px) {
    margin-top: 64px;
  }
  :hover {
    background: var(--orange-1, #ef8964);
  }
`;

export const Check = styled.div`
  color: ${props => {
    switch (props.type) {
      case 'invalid':
        return '#D80027';
      case 'valid':
        return '#3CBF61';
      default:
        return 'rgba(239, 237, 232, 0.3)';
    }
  }};
  input {
    display: flex;
    padding-top: 14px;
    padding-bottom: 14px;
    padding-left: 14px;
    align-items: center;

    font-size: 14px;

    line-height: calc(18 / 14);
    color: rgba(239, 237, 232, 0.6);
    background-color: transparent;
    border-radius: 12px;

    border: ${props => {
      switch (props.type) {
        case 'invalid':
          return '1px solid #D80027';
        case 'valid':
          return '1px solid #3CBF61';
        default:
          return '1px solid rgba(239, 237, 232, 0.3)';
      }
    }};

    &:hover {
      border: 1px solid #e6533c;
    }

    @media screen and (min-width: 375px) {
      width: 283px;
    }
    @media screen and (min-width: 768px) {
      width: 307px;
    }
  }
`;

export const Message = styled.div`
  margin-top: 4px;

  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0.12px;
`;

export const Sign = styled.div`
  margin-top: 12px;
  display: inline-flex;
  font-size: 12px;
  gap: 4px;

  a {
    text-decoration-line: underline;
  }
`;
