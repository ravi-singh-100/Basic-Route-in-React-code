import { createBrowserRouter,
  RouterProvider,
  // Route,
  // createRoutesFromElements
 } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import Layout from "./pages/Layout";
import Error from "./pages/Error";
import ProductsDetail from "./pages/Products-detail";
// const routerDefinition=createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage></HomePage>}></Route>
//     <Route path="/products" element={<ProductsPage></ProductsPage>}/>
//   </Route>
// )
// const router=createBrowserRouter(routerDefinition);

const router= createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    errorElement:<Error/>,
    children:[
      {path:'/' ,element:<HomePage></HomePage>},
      {path:'/products', element:<ProductsPage></ProductsPage>},
      {path:'/products/:productId' ,element:<ProductsDetail></ProductsDetail>}
    ]
  },

])

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App;
