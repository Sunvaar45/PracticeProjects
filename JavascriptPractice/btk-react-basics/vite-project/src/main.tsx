import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App'

function App() {
  return (
    <>
      <Header />
      <ProductList />
    </>
  );
}

function Header() {
  return (
      <h1>Header</h1>
  );
}

function ProductList() {
  const products = [
    {
      "imageUrl": "/img/CyberDragon.png",
      "title": "Product Title 1",
      "description": "Lorem ipsum dolor sit amet.",
      "price": "$19.99"
    },
    {
      "imageUrl": "/img/CyberDragon.png",
      "title": "Product Title 2",
      "description": "Lorem ipsum dolor sit amet.",
      "price": "$29.99"
    },
    {
      "imageUrl": "/img/CyberDragon.png",
      "title": "Product Title 3",
      "description": "Lorem ipsum dolor sit amet.",
      "price": "$39.99"
    }
  ];

  const productsArray = products.map((product, index) => (
    <ProductItem
      key={index}
      productObject={ product }
    />
  ))

  return (
    <>
      <h2>Product List</h2>
      { productsArray }
    </>
  );
}

function ProductItem({ productObject }) {
  return (
    <div>
      <img src={ productObject.imageUrl } alt="Product" />
      <h2>{ productObject.title }</h2>
      <p>{ productObject.description }</p>
      <span>{ productObject.price }</span>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)