import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './assets/layout/layout'
import Users from './assets/components/users/users'
import User from './assets/components/user/user'
function App() {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        errorElement: <div>Error! Not found</div>,
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Users />
          },
          {
            path: 'users',
            element: <Users />
          },
          {
            path: 'users/pages/:n',
            element: <Users />
          },
          {
            path: 'users/:id',
            element: <User />
          }
        ]
      }
    ]
  )
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
