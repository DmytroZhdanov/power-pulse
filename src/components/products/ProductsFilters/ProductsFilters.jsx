import { useState } from 'react';
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

const emptyFilter = {
  QUERY: '',
  CATEGORY: '',
  RECOMMENDED: '',
};

export default function ProductsFilters({ products }) {
  const [filter, setFilter] = useState(emptyFilter);
  const [search, setSearch] = useState('');

  console.log('filter:', filter);

  const handleClean = () => {
    setSearch('');
  };

  const uniqueCategories = Array.from(
    new Set(products.map(item => item.category)),
  );

  const arrRecommende = ['All', 'Recommended', 'Not recommended'];

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRecommended, setSelectedRecommended] = useState(null);

  const handleSelectCategoty = selectedCategory => {
    setSelectedCategory(selectedCategory);
    setFilter(prevFilter => ({
      ...prevFilter,
      CATEGORY: selectedCategory.label,
    }));
  };

  const handleSelectRecommended = selectedRecommended => {
    setSelectedRecommended(selectedRecommended);
    setFilter(prevFilter => ({
      ...prevFilter,
      RECOMMENDED: selectedRecommended.label,
    }));
  };

  return (
    <DivFilter>
      <DivSearch>
        <InputSearch
          type="text"
          value={filter.QUERY}
          onChange={e => {
            setFilter(prevFilter => ({
              ...prevFilter,
              QUERY: e.target.value,
            }));
          }}
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
            onChange={handleSelectCategoty}
            options={uniqueCategories.map(category => ({
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
            options={arrRecommende.map(rec => ({
              label: rec,
            }))}
            placeholder="All"
          />
        </SelectContainer>
      </SelectRow>
    </DivFilter>
  );
}
