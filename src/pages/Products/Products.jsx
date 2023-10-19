import TitlePage from "components/common/TitlePage/TitlePage";
import ProductsFilters from "components/products/ProductsFilters/ProductsFilters";
import ProductsList from "components/products/ProductsList/ProductsList";

export default function Products() {
  return (
    <>
      <div>Products page</div>
      <TitlePage />
      <ProductsFilters />
      <ProductsList />
    </>
  );
}
