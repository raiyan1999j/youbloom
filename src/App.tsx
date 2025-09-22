import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ContextProvider from "./context/contextprovider";
import MainLayout from "./layouts/mainlayout";
import Main from './pages/main/page.tsx';
import Details from './pages/details/page.tsx';
import Login from './pages/login/page.tsx';

const router = createBrowserRouter([
  {
    path:"/",
    element:<MainLayout/>,
    children:[
      {path:"/",element:<Main/>},
      {path:"/details",element:<Details/>},
      {path:"/login",element:<Login/>}
    ]
  }
]);

export default function App(){
  return(
    <>
    <ContextProvider>
      <RouterProvider router={router}/>
    </ContextProvider>
    </>
  )
}