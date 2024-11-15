import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      }).catch((error) => {
        console.error("Error fetching products:", error);
        
      })
  }, [id]);
  // console.log(product);
  return (
    <>
      {!loading ? (
        <div className="flex flex-col items-center justify-center min-h-screen ">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-64 h-64 object-cover mb-8"
          />
          <div className="bg-neutral p-6 rounded-lg shadow-md text-center">
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            <h2 className="text-xl text-primary mb-4">${product.price}</h2>
            <p className="mb-6">{product.description}</p>
            <button className="btn-primary btn dark:text-white py-2 px-4 rounded mb-3">
              Add to Cart
            </button>
            <Link
              to="/products"
              className="btn-primary btn dark:text-white py-2 px-4 mx-3 rounded"
            >
              Back to Products
            </Link>
          </div>
        </div>
      ) : (
        <span className="loading loading-spinner my-auto mx-auto col-span-3 sm:col-span-2 lg:col-span-3 loading-lg"></span>
      )}
    </>
  );
}

/* <div className="product">
    <h1>{product.title}</h1>
    <img src={product.image} alt={product.title} />
    <p>{product.description}</p>
    <p>{product.price}$</p>
    <Link to="/products">Back to products</Link> {/* new */
/* <NavLink to="/contact">Contact</NavLink> new search 
  </div> */
