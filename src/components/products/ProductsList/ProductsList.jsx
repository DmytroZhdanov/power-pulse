import ProductsItem from '../ProductsItem/ProductsItem';
import { ProductList } from './ProductsList.styled';

export default function ProductsList({ products }) {
  console.log('productList', products);
  return (
    <ProductList>
      {products.map(
        ({ _id, weight, calories, category, title, groupBloodNotAllowed }) =>
          title &&
          weight &&
          calories &&
          category &&
          groupBloodNotAllowed && (
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
  );
}
