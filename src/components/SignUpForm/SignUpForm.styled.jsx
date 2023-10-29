import styled from '@emotion/styled';

export const Text = styled.p`
  @media screen and (max-width: 374px) {
    width: calc(100% - 20px);
  }

  margin-top: 14px;

  line-height: calc(24 / 16);
  color: rgba(239, 237, 232, 0.3);

  @media screen and (min-width: 375px) {
    width: 335px;
  }
  @media screen and (min-width: 768px) {
    width: 496px;
    margin-top: 16px;
  }
`;

export const Inputs = styled.div`
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;

<<<<<<< HEAD
=======
  div {
    position: relative;
    width: 280px;

    @media screen and (min-width: 375px) {
      width: 335px;
    }

    @media screen and (min-width: 768px) {
      width: 364px;
    }
  }

  button {
    position: absolute;
    top: 14px;
    right: 12px;
    color: #efede8;
    background-color: transparent;
  }

  svg {
    width: 20px;
    height: 20px;

    fill: currentColor;
  }

>>>>>>> 8c4cb9b6ebc3df10aa0c8ed3eca6d2f45a3543f9
  @media screen and (min-width: 768px) {
    margin-top: 32px;
    gap: 20px;
  }
`;

<<<<<<< HEAD
export const Button = styled.button`
  color: #efede8;
  margin-top: 28px;
  display: flex;
  padding: 12px 40px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  background-color: #e6533c;

  @media screen and (min-width: 768px) {
    margin-top: 64px;
  }
  :hover {
    background-color: #ef8964;
  }
`;

=======
>>>>>>> 8c4cb9b6ebc3df10aa0c8ed3eca6d2f45a3543f9
export const Check = styled.div`
  @media screen and (max-width: 374px) {
    width: calc(100% - 20px);
  }

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
    width: 100%;
    padding: 14px;
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

    &:hover,
    &:focus {
      border: 1px solid #e6533c;
    }

    @media screen and (min-width: 375px) {
      width: 335px;
    }
    @media screen and (min-width: 768px) {
      width: 364px;
    }
  }
`;

export const Message = styled.div`
  margin-top: 4px;

  font-size: 12px;
  line-height: calc(18 / 12);
  letter-spacing: 0.12px;

  div {
    display: flex;
<<<<<<< HEAD
    align-items: center;
=======
>>>>>>> 8c4cb9b6ebc3df10aa0c8ed3eca6d2f45a3543f9
    gap: 4px;
  }

  svg {
<<<<<<< HEAD
    width: 16px;
    height: 16px;
=======
    min-width: 16px;
    min-height: 16px;
>>>>>>> 8c4cb9b6ebc3df10aa0c8ed3eca6d2f45a3543f9
    fill: currentColor;
  }
`;

export const Sign = styled.div`
  margin-top: 12px;
<<<<<<< HEAD
  display: inline-flex;
=======
  display: flex;
>>>>>>> 8c4cb9b6ebc3df10aa0c8ed3eca6d2f45a3543f9
  font-size: 12px;
  gap: 4px;

  a {
    text-decoration-line: underline;
  }
`;
<<<<<<< HEAD
=======

export const Buttons = styled.div`
  display: inline-flex;
  gap: 24px;

  @media screen and (min-width: 768px) {
    margin-top: 64px;
  }

  button {
    height: 42px;
    color: #efede8;
    margin-top: 28px;
    display: flex;
    padding: 12px 40px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 12px;
    background-color: #e6533c;

    :hover,
    :active {
      background-color: #ef8964;
    }
  }

  #google {
    width: 32px;
    background-color: #efede8;
    :hover,
    :active {
      background-color: #ef8964;
    }
  }

  svg {
    min-width: 28px;
    height: 28px;
  }
`;
>>>>>>> 8c4cb9b6ebc3df10aa0c8ed3eca6d2f45a3543f9
