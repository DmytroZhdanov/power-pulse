import { DataContainer } from './DataStep.style';

const Data = ({ title, subtitle, children }) => {
  return (
    <DataContainer>
      <div style={{ width: '496px', marginBottom: '54px' }}>
        <h1>{title}</h1>
        <h6>{subtitle}</h6>
      </div>

      {children}
    </DataContainer>
  );
};

export default Data;
