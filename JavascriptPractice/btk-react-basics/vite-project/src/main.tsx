import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {
  return (
    <>
      <Header />
      <div className="container mt-4">
        <ProductList />
        {/* <Footer /> */}
      </div>
    </>
  );
}

function Header() {
  return (
      <header>
        <nav className="navbar navbar-expand bg-dark border-bottom border-body" 
          data-bs-theme="dark">
            <div className="container">
              <a href="#" className="navbar-brand">Store App</a>
            </div>
        </nav>
      </header>
  );
}

function ProductList() {
  const products = [
    {
      "imageUrl": "/img/CyberDragon.png",
      "title": "Product Title 1",
      "description": "Lorem ipsum dolor sit amet.",
      "price": 19.99,
      "isActive": true
    },
    {
      "imageUrl": "/img/CyberDragon.png",
      "title": "Product Title 2",
      "description": "Lorem ipsum dolor sit amet.",
      "price": 29.99,
      "isActive": true
    },
    {
      "imageUrl": "/img/CyberDragon.png",
      "title": "Product Title 3",
      "description": "Lorem ipsum dolor sit amet.",
      "price": 39.99,
      "isActive": true
    },
    {
      "imageUrl": "/img/CyberDragon.png",
      "title": "Product Title 3",
      "description": "Lorem ipsum dolor sit amet.",
      "price": 39.99,
      "isActive": true
    },
    {
      "imageUrl": "/img/CyberDragon.png",
      "title": "Product Title 3",
      "description": "Lorem ipsum dolor sit amet.",
      "price": 39.99,
      "isActive": true
    },
    {
      "imageUrl": "/img/CyberDragon.png",
      "title": "Product Title 3",
      "description": "Lorem ipsum dolor sit amet.",
      "price": 39.99,
      "isActive": true
    },
  ];

  // const products = [];
 
  const productsArray = products.map((product, index) => (
    <div className="col">
      <ProductItem
        key={index}
        productObject={ product }
      />
    </div>
  ))

  return (
    <>
      {
        products.length > 0 ? (
          <div id="product-list" className="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-4">
            {productsArray}
          </div>
        ) : (
          <p>No products available.</p>
        )
      }
    </>
  );
}

function ProductItem({ productObject }) {
  if (!productObject.isActive) return null;

  return (
    <div id="product-item" className="card shadow-sm">
      <img className="card-img-top p-2 p-md-3 border-bottom" src={ productObject.imageUrl } alt="Product" />
      <div className="card-body">
        <h2 className="card-title">{ productObject.title }</h2>
        <p className="card-text">{ productObject.description }</p>
        <span className={`${productObject.price < 30 ? "badge text-bg-success" : "badge text-bg-primary"}` } >{ productObject.price }</span>
      </div>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openingHour = 10;
  const closingHour = 22;
  const isOpen = hour >= openingHour && hour <= closingHour;
  console.log(isOpen);

  return (
    <footer>
      {
        isOpen ? (
          <p>We are open until { closingHour }:00.</p>
        ) : (
          <p>We are closed. Our working hours are from { openingHour }:00 to { closingHour }:00.</p>
        )
      }
    </footer>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)