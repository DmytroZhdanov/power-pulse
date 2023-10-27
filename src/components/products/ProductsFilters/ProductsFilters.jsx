import { useEffect, useState } from 'react';
import {
   
  DivFilter,
  DivSearch,
  InputSearch,
  SvgSearch,
  BtnClean,
  SelectRow,
  SelectContainer,
  StyledSelect,
} from './ProductsFilters.styled';

import { PRODUCTS_FILTER } from '../../../utils/constants';
const { QUERY, RECOMMENDED, CATEGORY } = PRODUCTS_FILTER;
import { useFetchProductsCategoriesQuery } from '../../../redux/api';

const emptyFilter = {
  [QUERY]: '',
  [CATEGORY]: '',
  [RECOMMENDED]: '',
};

export default function ProductsFilters({ onProductsChange }) {
  const [filter, setFilter] = useState(emptyFilter);
  const [search, setSearch] = useState('');
  const [categories, setCategories] = useState([]);

  const currentData = useFetchProductsCategoriesQuery();

  useEffect(() => {
    if (currentData.isSuccess) {
      const [productsCategories] = currentData.data;
      setCategories(productsCategories.productsCategories);
    }
  }, [currentData]);

  useEffect(() => {
    onProductsChange(filter);
  }, [filter]);

  const handleClean = () => {
    setSearch('');
    setFilter(prevFilter => ({
      ...prevFilter,
      [QUERY]: '',
    }));
  };

  const arrRecommended = ['All', 'Recommended', 'Not recommended'];

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRecommended, setSelectedRecommended] = useState(null);

  const onQueryChange = e => {
   setFilter(prevFilter => ({
     ...prevFilter,
     [QUERY]: e.target.value.trim(),
   }));
   setSearch(e.target.value);
  }

  const handleSelectCategory = selectedCategory => {
    setSelectedCategory(selectedCategory);
    setFilter(prevFilter => ({
      ...prevFilter,
      [CATEGORY]: selectedCategory.label,
    }));
  };

  const handleSelectRecommended = selectedRecommended => {
    setSelectedRecommended(selectedRecommended);

    switch (selectedRecommended.label) {
      case 'Recommended':
        setFilter(prevFilter => ({
          ...prevFilter,
          [RECOMMENDED]: [true],
        }));
        break;
      case 'Not recommended':
        setFilter(prevFilter => ({
          ...prevFilter,
          [RECOMMENDED]: [false],
        }));
        break;
      default:
        setFilter(prevFilter => ({
          ...prevFilter,
          [RECOMMENDED]: null,
        }));
    }
  };

  return (
    <>
      <DivFilter>
        <DivSearch>
          <InputSearch
            type="text"
            value={filter[QUERY]}
            onChange={onQueryChange}
          />

          <SvgSearch width="18" height="18">
            <use href="/src/assets/images/sprite/sprite.svg#search"></use>
          </SvgSearch>
          {search.trim() && (
            <BtnClean onClick={handleClean}>
              <svg width="18" height="18">
                <use href="/src/assets/images/sprite/sprite.svg#x-clean"></use>
              </svg>
            </BtnClean>
          )}
        </DivSearch>
        <SelectRow>
          <SelectContainer>
            <StyledSelect
              styles={{
                option: baseStyles => ({
                  ...baseStyles,
                  background: '#1C1C1C',
                }),
                control: baseStyles => ({
                  ...baseStyles,
                  width: '100%',
                  background: '#040404',
                  borderRadius: '12px',
                  height: '44px',
                  border: '0px solid rgba(239, 237, 232, 0.3)',
                  boxShadow: 'none',
                  '&:focus': {
                    boxShadow: 'none',
                    borderColor: '#E6533C',
                  },
                }),
                dropdownIndicator: baseStyles => ({
                  ...baseStyles,
                  display: 'none',
                  '@media (min-width: 768px)': {
                    display: 'flex',
                    justifyContent: 'flex-end',
                    color: '#efede8',
                  },
                }),
                menu: baseStyles => ({
                  ...baseStyles,
                  background: '#040404',
                  border: 'none',
                }),
                menuList: baseStyles => ({
                  ...baseStyles,
                  maxHeight: '228px',
                  borderRadius: '12px',
                  pading: '14px',
                }),
                indicatorSeparator: baseStyles => ({
                  ...baseStyles,
                  display: 'none',
                }),
                placeholder: baseStyles => ({
                  ...baseStyles,
                  color: '#efede8',
                }),
                singleValue: baseStyles => ({
                  ...baseStyles,
                  color: '#efede8',

                  justifyContent: 'center',
                }),
                container: baseStyles => ({
                  ...baseStyles,
                  display: 'flex',
                  alignItems: 'center',
                  '&:focus': {
                    border: '1px solid #E6533C',
                  },
                  border: '1px',
                  height: '46px',
                  '@media (min-width: 768px)': {
                    height: '52px',
                    width: '192px',
                  },
                }),
                input: baseStyles => ({
                  ...baseStyles,
                  fontSize: '14px',
                }),
                valueContainer: baseStyles => ({
                  ...baseStyles,
                  '@media (min-width: 768px)': {
                    width: '146px',
                  },
                }),
              }}
              value={selectedCategory}
              onChange={handleSelectCategory}
              options={categories.map(category => ({
                label: category,
              }))}
              placeholder="Categories"
            />
          </SelectContainer>
          <SelectContainer>
            <StyledSelect
              styles={{
                option: baseStyles => ({
                  ...baseStyles,
                  background: '#1C1C1C',
                }),
                control: baseStyles => ({
                  ...baseStyles,
                  width: '100%',
                  background: '#040404',
                  borderRadius: '12px',
                  height: '44px',
                  border: '0px solid rgba(239, 237, 232, 0.3)',
                  boxShadow: 'none',
                  '&:focus': {
                    boxShadow: 'none',
                    borderColor: '#E6533C',
                  },
                }),
                dropdownIndicator: baseStyles => ({
                  ...baseStyles,
                  display: 'none',
                  '@media (min-width: 768px)': {
                    display: 'flex',
                    justifyContent: 'flex-end',
                    color: '#efede8',
                  },
                }),
                menu: baseStyles => ({
                  ...baseStyles,
                  background: '#040404',
                  border: 'none',
                }),
                menuList: baseStyles => ({
                  ...baseStyles,
                  maxHeight: '228px',
                  borderRadius: '12px',
                  pading: '14px',
                  //border: '1px solid rgba(239, 237, 232, 0.3)',
                }),
                indicatorSeparator: baseStyles => ({
                  ...baseStyles,
                  display: 'none',
                }),
                placeholder: baseStyles => ({
                  ...baseStyles,
                  color: '#efede8',
                }),
                singleValue: baseStyles => ({
                  ...baseStyles,
                  color: '#efede8',
                }),
                container: baseStyles => ({
                  ...baseStyles,
                  display: 'flex',
                  alignItems: 'center',
                  '&:focus': {
                    border: '1px solid #E6533C',
                  },
                  border: '1px',
                  height: '46px',
                  '@media (min-width: 768px)': {
                    height: '52px',
                    width: '204px',
                  },
                }),
                input: baseStyles => ({
                  ...baseStyles,
                  fontSize: '14px',
                }),
                valueContainer: baseStyles => ({
                  ...baseStyles,
                  '@media (min-width: 768px)': {
                    width: '195px',
                  },
                }),
              }}
              value={selectedRecommended}
              onChange={handleSelectRecommended}
              options={arrRecommended.map(rec => ({
                label: rec,
              }))}
              placeholder="All"
            />
          </SelectContainer>
        </SelectRow>
      </DivFilter>
    </>
  );
}
