import { useState } from 'react';
import {
  DivSearch,
  InputSearch,
  SvgSearch,
  BtnClean,
  SelectRow,
  SelectContainer,
  StyledSelect,
} from './ProductsFilters.styled';

export default function ProductsFilters({ products }) {
  const [search, setSearch] = useState('');

  const handleClean = () => {
    setSearch('');
  };

  const uniqueCategories = [];
  const categoryMap = {};

  products.forEach(product => {
    const categoryId = product._id.$oid;
    const category = product.category;

    if (!categoryMap[category]) {
      categoryMap[category] = categoryId;
      uniqueCategories.push({ id: categoryId, category: category });
    }
  });

  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);

  const handleOptionChange1 = selectedOption => {
    setSelectedOption1(selectedOption);
    console.log('selectedOption1:', selectedOption1);
  };

  const handleOptionChange2 = selectedOption => {
    setSelectedOption2(selectedOption);
  };

  return (
    <>
      <DivSearch>
        <InputSearch
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
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
                background: '#040404',
                //color: '#efede8',
              }),
              control: baseStyles => ({
                ...baseStyles,
                background: '#040404',
                borderRadius: '12px',
                border: '0px solid rgba(239, 237, 232, 0.3)',
                color: '#efede8',
              }),
              dropdownIndicator: baseStyles => ({
                ...baseStyles,
                display: 'none',
              }),
              menu: baseStyles => ({
                ...baseStyles,
                background: '#040404',
                //color: '#efede8',
              }),
              indicatorSeparator: baseStyles => ({
                ...baseStyles,
                display: 'none',
              }),
              placeholder: baseStyles => ({
                ...baseStyles,
                //background: '#040404',
                color: '#efede8',
              }),
              singleValue: baseStyles => ({
                ...baseStyles,
                //background: '#040404',
                color: '#efede8',
              }),
            }}
            value={selectedOption1}
            onChange={handleOptionChange1}
            options={uniqueCategories.map(category => ({
              value: category.id,
              label: category.category,
            }))}
            placeholder="Categories"
          />
        </SelectContainer>
        <SelectContainer>
          <StyledSelect
            styles={{
              option: baseStyles => ({
                ...baseStyles,
                background: '#040404',
              }),
              control: baseStyles => ({
                ...baseStyles,
                background: '#040404',
                borderRadius: '12px',
                border: '0px solid rgba(239, 237, 232, 0.3)',
              }),
              dropdownIndicator: baseStyles => ({
                ...baseStyles,
                display: 'none',
              }),
              menu: baseStyles => ({
                ...baseStyles,
                background: '#040404',
              }),
              indicatorSeparator: baseStyles => ({
                ...baseStyles,
                display: 'none',
              }),
              placeholder: baseStyles => ({
                ...baseStyles,
                //background: '#040404',
                color: '#efede8',
              }),
              singleValue: baseStyles => ({
                ...baseStyles,
                //background: '#040404',
                color: '#efede8',
              }),
            }}
            value={selectedOption2}
            onChange={handleOptionChange2}
            options={uniqueCategories.map(category => ({
              value: category.id,
              label: category.category,
            }))}
            placeholder="All"
          />
        </SelectContainer>
      </SelectRow>
    </>
  );
}
