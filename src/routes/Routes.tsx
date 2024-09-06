import {Navbar} from '../components'
import {
  ProductsPage,
  ProductDetails,
  Home,
  SellerDashboard,
  Cart,
  SellerProducts,
  SellerOrders,
  LoginPage
} from "../pages";
import { RouterProvider, createBrowserRouter } from 'react-router-dom'



function Routes() {
  const router = createBrowserRouter([
    {
        element: <Navbar />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <LoginPage />
            },
            {
                path: "/product/:productId",
                element: <ProductDetails />
            },
            {
                path: "/all-products",
                element: <ProductsPage />
            },
            {
                path: "/seller-home",
                element: <SellerDashboard />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/seller-products",
                element: <SellerProducts />
            },
            {
                path: "/seller-orders",
                element: <SellerOrders />
            },
        ]
    }
  ])


  return (
    <RouterProvider router={router} />
  )
}

export default Routes