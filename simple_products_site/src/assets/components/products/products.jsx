import products from '../../data/Fetch'
import  './products.css';
import { Link } from 'react-router-dom';

export default function Products() {
    let myproducts = products();
    return (
        <div className="card-container">
            {
                myproducts.map((p) => (
                    <div className="card" key={p.id}>
                        <img src={p.image} alt={p.title} className="card-image" />
                        <div className="card-content">
                            <h3>{p.title}</h3>
                            <h3 className="price" >${p.price}</h3>
                            <p>{p.description}</p>
                        </div>
                        <Link className="view-product-btn" to={`${p.id}`}>View Product</Link>
                    </div>
                ))
            }
        </div>
    )
}

// import './products.css';
// import Fetch from '../../data/Fetch';
// import { useState } from 'react';

// export default function Products() {
//   const [data, setData] = useState([]);
//   let datas = Fetch();
//   datas.map((item) =>{
//     // console.log(item.id);
//   });
//   // useEffect(() => {
//   //   setData(Fetch());
//   // }, []);
//   return (
//     <>
//       <h1>Products</h1>
//       {data.map((item) => (
//         <div key={item.id}>
//           <h1>{item.title}</h1>
//           <p>{item.description}</p>
//         </div>
//       ))}
//     </>
//   );
// }
