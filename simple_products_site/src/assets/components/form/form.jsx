import './form.css';
import { Link } from 'react-router-dom';
export default function Form() {
  return (
    <div className="home-container">
        <h1>Welcome to Our Product Store</h1>
        <p>Explore our fantastic range of products designed to meet your needs.</p>
        <Link to="/products" className="go-to-products-btn">Go to Products</Link>
    </div>
  );
}