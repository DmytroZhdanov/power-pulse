import BasicModalWindow from 'components/common/BasicModalWindow/BasicModalWindow';
import AddProductForm from '../AddProductForm/AddProductForm';
import AddProductSuccess from '../AddProductSuccess/AddProductSuccess';

export default function ProductsItem() {
  return (
    <>
      <div>ProductsItem component</div>
      <BasicModalWindow>
        <AddProductForm />
      </BasicModalWindow>
      <BasicModalWindow>
        <AddProductSuccess />
      </BasicModalWindow>
    </>
  );
}
