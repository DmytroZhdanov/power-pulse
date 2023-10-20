import BasicModalWindow from 'components/common/BasicModalWindow/BasicModalWindow';
import AddProductForm from 'components/products/AddProductForm/AddProductForm';
import AddProductSuccess from 'components/products/AddProductSuccess/AddProductSuccess';
import {
  ProductCard,
  ProductHeader,
  Diet,
  Indicator,
  RecommendDiv,
  Description,
  ProductTitle,
  Product,
  RecommendText,
  Button,
  BtnText,
  Svg,
  Text,
  TextCategory,
  Value,
} from './ProductsItem.styled';

export default function ProductsItem({
  weight,
  calories,
  category,
  title,
  //  groupBloodNotAllowed,
}) {
  const recommended = true;

  return (
    <>
      <ProductCard>
        <ProductHeader>
          <Diet>DIET</Diet>
          <RecommendDiv>
            <Indicator recommended={recommended}></Indicator>
            <RecommendText>
              {recommended ? 'Recommended' : 'Not Recommended'}
            </RecommendText>
            <Button>
              <BtnText>Add</BtnText>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M7.5 14L14 7.5M14 7.5L7.5 1M14 7.5H1"
                  stroke="#E6533C"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          </RecommendDiv>
        </ProductHeader>
        <Product>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle cx="12" cy="12" r="12" fill="#EFA082" />
            <path
              d="M18.8234 8.72544C18.6138 8.47504 18.2403 8.44212 17.9899 8.65092L16.349 10.0294L15.5943 8.15967C15.5675 8.08949 15.5267 8.03057 15.4799 7.97859C15.3257 7.63549 15.058 7.34091 14.6889 7.17023C14.5286 7.09745 14.3631 7.05846 14.1977 7.0394C14.1613 7.02034 14.1283 6.99521 14.0868 6.98222L11.199 6.17732C11.037 6.13314 10.8741 6.16173 10.7407 6.2397C10.5821 6.29342 10.4461 6.40865 10.3811 6.57587L9.29378 9.37178C9.17594 9.67589 9.3267 10.019 9.63168 10.1386C9.93492 10.2564 10.2789 10.1048 10.3976 9.79978L11.316 7.43882L12.6312 7.80444C12.5991 7.85643 12.5645 7.90495 12.5385 7.9604L10.8524 11.6149C10.8282 11.6686 10.8152 11.7232 10.7979 11.7787L8.7488 15.214L5.31955 16.3611C4.9314 16.6514 4.84909 17.1981 5.13587 17.5862C5.42439 17.9752 5.97282 18.0575 6.36011 17.7708L9.86907 16.5621C9.97651 16.4841 10.0545 16.3819 10.1134 16.2719C10.1576 16.2251 10.2078 16.1878 10.2416 16.1298L11.4633 14.0816L13.6319 15.9296L11.3116 18.5445C10.9919 18.9049 11.024 19.4603 11.3862 19.7791C11.7474 20.1005 12.3011 20.0667 12.6225 19.7046L15.5181 16.4426C15.6082 16.342 15.6619 16.2259 15.6983 16.1047C15.7199 16.0388 15.7199 15.9704 15.7251 15.9019C15.7251 15.8673 15.7381 15.8361 15.7355 15.804C15.7277 15.5649 15.6307 15.3327 15.4349 15.1672L13.4395 13.4656C13.5834 13.3287 13.7055 13.1658 13.7939 12.9743L15.0866 10.1749L15.5007 11.2779C15.5181 11.3758 15.551 11.472 15.6203 11.5525C15.6827 11.627 15.7624 11.6764 15.8473 11.7111C15.856 11.7154 15.8664 11.7163 15.8768 11.7189C15.9305 11.7379 15.9851 11.7561 16.0414 11.7587C16.1081 11.7648 16.1757 11.7561 16.2441 11.7371C16.2459 11.7362 16.2467 11.7362 16.2467 11.7362C16.2649 11.7319 16.2831 11.7353 16.3013 11.7275C16.3975 11.6912 16.4711 11.6296 16.5344 11.5577L18.8893 9.55892C19.1397 9.34838 19.034 8.97583 18.8234 8.72544Z"
              fill="#EFEDE8"
            />
            <path
              d="M15.8458 7.30102C16.7574 7.30102 17.4963 6.56206 17.4963 5.65051C17.4963 4.73896 16.7574 4 15.8458 4C14.9343 4 14.1953 4.73896 14.1953 5.65051C14.1953 6.56206 14.9343 7.30102 15.8458 7.30102Z"
              fill="#EFEDE8"
            />
          </Svg>

          <ProductTitle>{title}</ProductTitle>
        </Product>
        <Description>
          <Text>
            Calories:<Value>{calories}</Value>
          </Text>
          <TextCategory>
            Category:<Value>{category}</Value>
          </TextCategory>
          <Text>
            Weight:<Value>{weight}</Value>
          </Text>
        </Description>
      </ProductCard>
      <BasicModalWindow>
        <AddProductForm />
      </BasicModalWindow>
      <BasicModalWindow>
        <AddProductSuccess />
      </BasicModalWindow>
    </>
  );
}
