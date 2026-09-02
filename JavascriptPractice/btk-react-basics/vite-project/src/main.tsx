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

  return (
    <>
      <h2>Product List</h2>
      <ProductItem
        imageUrl = { products[0].imageUrl }
        title = { products[0].title }
        description = { products[0].description }
        price = { products[0].price }
      />
      <ProductItem
        imageUrl = { products[1].imageUrl }
        title = { products[1].title }
        description = { products[1].description }
        price = { products[1].price }
      />
      <ProductItem
        imageUrl = { products[2].imageUrl }
        title = { products[2].title }
        description = { products[2].description }
        price = { products[2].price }
      />
    </>
  );
}

function ProductItem(props) {
  console.log(props);

  return (
    <div>
      <img src={ props.imageUrl } alt="Product" />
      <h2>{ props.title }</h2>
      <p>{ props.description }</p>
      <span>{ props.price }</span>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)