export default function ProductItem({ productObject }) {
  if (!productObject.isActive) return null;

  return (
    <div id="product-item" className="card shadow-sm">
      <img className="card-img-top p-2 p-md-3 border-bottom" src={productObject.imageUrl} alt="Product" />
      <div className="card-body">
        <h2 className="card-title">{productObject.title}</h2>
        <p className="card-text">{productObject.description}</p>
        <span className={`${productObject.price < 30 ? "badge text-bg-success" : "badge text-bg-primary"}`}>{productObject.price}</span>
      </div>
    </div>
  );
}
