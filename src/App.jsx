import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Link,
} from "react-router-dom";
import ProductList from "./ProductList";
import CheckOut from "./CheckOut";
import ProductDetail from "./ProductDetail";
import ErrorPage from "./ErrorPage";
import NavbarComponent from "./NavbarComponent";
import { CartContext } from "./CartContext";
import { useState } from "react";

// store base URL
const gitPageURL = import.meta.env.BASE_URL;


// the path is because of git page, and i set the vite.config.js base to "ReactVitePracticeWeb"
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={gitPageURL} element={<NavbarComponent />}>
      
      <Route index element={<ProductList />} />
      <Route path={gitPageURL + "CheckOut"} element={<CheckOut />} />
      <Route
        path={gitPageURL + "Product"}
        element={<ProductDetail />}
        >
        <Route path=":id" element={<ProductDetail />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />

    </Route>
  )
);

/*
// This way is also working
const routerTest = createBrowserRouter(
  [
    {
      element: <NavbarComponent />,
      children:
        [
          {
            path: "/ReactVitePracticeWeb",
            element: <ProductList />
          },
          {
            path: "/ReactVitePracticeWeb/CheckOut",
            element: <CheckOut />
          }
        ]
      
    },
  ]
)
*/

function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <>
    <CartContext.Provider value={{cartItems, setCartItems}}>
      <RouterProvider router={router} />
      </CartContext.Provider>
    </>
  );
}

export default App;
