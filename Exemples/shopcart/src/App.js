import logo from './logo.svg';
import './App.css';
import Product from './components/Product';
import ProductsContainer from './containers/ProductsContainer';
import CartContainer from './containers/CartContainer';

function App() {
  return (
    <div>
    <h2>Shopping Cart Example</h2>
    <hr />
    <ProductsContainer/>
    <hr />
    <CartContainer/> 
     
    </div>
  );
}

export default App;
