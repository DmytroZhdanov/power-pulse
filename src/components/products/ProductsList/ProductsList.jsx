import ProductsItem from '../ProductsItem/ProductsItem';
import { ProductList,DivProducts } from './ProductsList.styled';

export default function ProductsList({ products }) {
  return (<DivProducts>
    <ProductList>
      {products.map(
        ({ _id, weight, calories, category, title, groupBloodNotAllowed }) => (
          <ProductsItem
            key={_id}
            title={title}
            weight={weight}
            calories={calories}
            category={category}
            groupBloodNotAllowed={groupBloodNotAllowed}
          ></ProductsItem>
        ),
      )}
    </ProductList>
    </DivProducts>
  );
}
