import Header from './components/Header';
import ProductList from './components/ProductList';

export default function App() {
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