import { Link, NavLink, useParams } from "react-router-dom"; // new
import { useState ,useEffect} from "react"
import './productPage.css'

// import { useMemo,useCallback } from "react"; // new search 

export default function Product(){
  const { id } = useParams(); // new
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
      setProduct(data);
      setLoading(false);
      });
  }, [id]);

  if (!loading){
    return (
        <div className="product-preview">
          <img src={product.image} alt={product.title} className="product-image" />
          <div className="product-details">
              <h1 className="product-title">{product.title}</h1>
              <h2 className="product-price">${product.price}</h2>
              <p className="product-description">
              {product.description}
              </p>
              <button className="add-to-cart-btn">Add to Cart</button>
              <Link to="/products" className="add-to-cart-btn" > back to products </Link>
          </div>
        </div>
    )
  }
}

  /* <div className="product">
    <h1>{product.title}</h1>
    <img src={product.image} alt={product.title} />
    <p>{product.description}</p>
    <p>{product.price}$</p>
    <Link to="/products">Back to products</Link> {/* new */
    /* <NavLink to="/contact">Contact</NavLink> new search 
  </div> */