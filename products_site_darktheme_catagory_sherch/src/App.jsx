import Products from './assets/components/products/products'
import Form from './assets/components/form/form';
import Layout from './assets/pages/layout/layout';
import Product from './assets/pages/productPage/productPage'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([  
  {  
    path: "/",  
    errorElement: <div>Error! Not found</div>,  
    element: <Layout />,  
    children: [  
      {  
        index: true,  // This makes this route the default for this parent
        element: <Form />,  
      },  
      {  
        path: "products",  
        element: <Products />,  
      },  
      {  
        path: "products/:id",  
        element: <Product />,  
      }  
    ],  
  },  
]);  
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
