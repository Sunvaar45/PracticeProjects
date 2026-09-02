import { products } from '../data';
import ProductItem from './ProductItem';

export default function ProductList() {
  const productsArray = products.map((product, index) => (
    <div className="col" key={index}>
      <ProductItem
        productObject={product} />
    </div>
  ));

  return (
    <>
      {products.length > 0 ? (
        <div id="product-list" className="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-4">
          {productsArray}
        </div>
      ) : (
        <p>No products available.</p>
      )}
    </>
  );
}
