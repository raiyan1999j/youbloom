import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/mainlayout.tsx';
import Main from './pages/main/page.tsx';
import Details from './pages/details/page.tsx';

const router = createBrowserRouter([
  {
    path:"/",
    element:<MainLayout/>,
    children:[
      {path:"/",element:<App/>},
      {path:"/main",element:<Main/>},
      {path:"/details",element:<Details/>}
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
