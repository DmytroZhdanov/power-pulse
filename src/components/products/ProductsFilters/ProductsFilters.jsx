import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import {
  DivFilter,
  DivSearch,
  InputSearch,
  SvgSearch,
  BtnClean,
  SelectRow,
  SelectContainer,
  StyledSelect,
  TitleP,
} from './ProductsFilters.styled';

import { PRODUCTS_FILTER } from 'src/utils/constants';
import { useFetchProductsCategoriesQuery } from 'src/redux/api';
import sprite from 'src/assets/images/sprite/sprite.svg';

const { QUERY, RECOMMENDED, CATEGORY } = PRODUCTS_FILTER;

const emptyFilter = {
  [QUERY]: '',
  [CATEGORY]: '',
  [RECOMMENDED]: '',
};

/**
 * The ProductsFilters component provides a user interface to filter and search for products.
 *
 * @param {Function} onProductsChange A callback function to handle changes in the filter and trigger product updates.
 * @returns {JSX.Element} The ProductsFilters component.
 */

export default function ProductsFilters({ onProductsChange }) {
  const [filter, setFilter] = useState(emptyFilter);
  const [search, setSearch] = useState('');
  const [categories, setCategories] = useState([]);
  const [queryChangeTimer, setQueryChangeTimer] = useState(null);

  const { isSuccess, currentData } = useFetchProductsCategoriesQuery();

  /**
   * Loads the all list of categories from the backend.
   *
   * @param {boolean} isSuccess successful response to the request from the backend.
   * @returns {array}  Returns an array of all product categories on the backend.
   */

  useEffect(() => {
    if (isSuccess) {
      const [allCategories] = currentData;
      const { productsCategories } = allCategories;
      setCategories(productsCategories);
    }
  }, [currentData, isSuccess]);

  useEffect(() => {
    onProductsChange(filter);
  }, [filter, onProductsChange]);

  /**
   * Clears the search input and resets the filter.
   *
   * @function handleClean
   */
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

  /**
   * Handles changes in the search input.
   *
   * @function onQueryChange
   * @param {Event} e - The input change event.
   */
  const onQueryChange = e => {
    setSearch(e.target.value);

    if (queryChangeTimer) {
      clearTimeout(queryChangeTimer);
    }
    const newTimer = setTimeout(() => {
      setFilter(prevFilter => ({
        ...prevFilter,
        [QUERY]: e.target.value,
      }));
    }, 700);

    setQueryChangeTimer(newTimer);
  };

  /**
   * Handles category selection from the dropdown.
   *
   * @function handleSelectCategory
   * @param {Object} selectedCategory - The selected category option.
   */
  const handleSelectCategory = selectedCategory => {
    setSelectedCategory(selectedCategory);
    setFilter(prevFilter => ({
      ...prevFilter,
      [CATEGORY]: selectedCategory.label,
    }));
  };

  /**
   * Handles "Recommended" dropdown selection and sets the filter accordingly.
   *
   * @function handleSelectRecommended
   * @param {Object} selectedRecommended - The selected recommended option.
   */
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
          <InputSearch type="text" value={search} onChange={onQueryChange} />

          <SvgSearch width="18" height="18">
            <use href={`${sprite}#search`}></use>
          </SvgSearch>

          {search.trim() && (
            <BtnClean onClick={handleClean}>
              <svg width="18" height="18">
                <use href={`${sprite}#x-clean`}></use>
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
                  backgroundColor: 'transparent',
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
                  borderRadius: '12px',
                }),
                menuList: baseStyles => ({
                  ...baseStyles,
                  maxHeight: '228px',
                  borderRadius: '12px',
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
                label: category.charAt(0).toUpperCase() + category.slice(1),
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
                  backgroundColor: 'transparent',
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
                  background: 'none',
                  border: 'none',
                }),
                menuList: baseStyles => ({
                  ...baseStyles,
                  maxHeight: '228px',
                  borderRadius: '12px',
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

        <TitleP>Filters</TitleP>
      </DivFilter>
    </>
  );
}

ProductsFilters.propTypes = {
  onProductsChange: PropTypes.func.isRequired,
};
