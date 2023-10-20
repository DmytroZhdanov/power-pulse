import { ProductsItem } from '../ProductsItem/ProductsItem';
import { ProductList, Container } from './ProductsList.styled';

export const ProductsList = ({ products }) => {
  return (
    <Container>
      <ProductList>
        {products.map(
          ({
            _id,
            weight,
            calories,
            category,
            title,
            groupBloodNotAllowed,
          }) => (
            <ProductsItem
              key={_id.$oid}
              title={title}
              weight={weight}
              calories={calories}
              category={category}
              groupBloodNotAllowed={groupBloodNotAllowed}
            ></ProductsItem>
          ),
        )}
        <ProductsItem />
      </ProductList>
    </Container>
  );
};
