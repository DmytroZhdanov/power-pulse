import { useState } from 'react';
import {
  DivSearch,
  InputSearch,
  SvgSearch,
  BtnClean,
} from './ProductsFilters.styled';

export default function ProductsFilters() {
  const [search, setSearch] = useState('');
  const handleClean = () => {
    setSearch('');
  };

  return (
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
  );
}
