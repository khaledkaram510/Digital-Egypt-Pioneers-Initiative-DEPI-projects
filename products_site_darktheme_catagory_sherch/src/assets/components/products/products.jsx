import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Products() {
  const [myproducts, setProducts] = useState([]);
  const [serchProduct, setSearchProduct] = useState("");
  const [category, setCategory] = useState("Default");
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/category-list`);
        if (!response.ok) {
            throw new Error("Failed to fetch products");
          }
          const data = await response.json();
        //   console.log(data);
          setCategoryList(data); 
        if (serchProduct) {
            const response = await fetch(`https://dummyjson.com/products/search?q=${serchProduct}`);
            if (!response.ok) {
                throw new Error("Failed to fetch products");
              }
              const data = await response.json();
              setProducts(data.products); 
        }else if(category !=="Default"){
            const response = await fetch(`https://dummyjson.com/products/category/${category}`);
            if (!response.ok) {
                throw new Error("Failed to fetch products");
              }
              const data = await response.json();
              setProducts(data.products);
        }else{
            const response = await fetch("https://dummyjson.com/products");
            if (!response.ok) {
                throw new Error("Failed to fetch products");
              }
              const data = await response.json();
              setProducts(data.products); 
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    // console.log(category);
    loadProducts();
  }, [serchProduct,category]);

  return (
    <>
      <div className="navbar flex justify-between fixed bg-base-200 z-50">
        <div className="flex">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <select value={category} onChange={(e)=>setCategory(e.target.value)} className="select select-bordered w-full max-w-xs">
            <option value="Default">Default</option>
            {categoryList &&
            categoryList.map((c,i) => (
            <option value={c} key={i}>{c}</option>
            ))
            }
        </select>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
                onChange={(e) => setSearchProduct(e.target.value)}
                value={serchProduct}
            />
          </div>
        </div>
      </div>
      <div className={`grid pt-16 ${myproducts.length <= 0?"h-full":""}  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8`}>
        {myproducts.length > 0 ? (
          myproducts.map((p) => (
            <div
              className="bg-neutral flex flex-col justify-between p-6 rounded-lg shadow-md"
              key={p.id}
            >
              <img
                src={p.thumbnail} // Use the correct image key from the API response
                alt={p.title}
                className="w-full bg-neutral  h-64 object-contain mb-4"
              />
              <div className="text-center">
                <h3 className="text-lg font-bold mb-2">{p.title}</h3>
                <h3 className="text-xl text-primary">${p.price}</h3>
                <p className="text-neutral-content mb-4">{p.description}</p>
              </div>
              <Link
                to={`${p.id}`}
                className=" btn-primary btn dark:text-white text-center py-2 rounded "
              >
                View Product
              </Link>
            </div>
          ))
        ) :serchProduct? (<h1 className="dark:text-white font-bold text-4xl col-span-3 sm:col-span-2 lg:col-span-3 my-auto mx-auto">No Products Found</h1>) : (
            <span className="loading loading-spinner my-auto mx-auto col-span-3 sm:col-span-2 lg:col-span-3 loading-lg"></span>
        )}
      </div>
    </>
  );
}
