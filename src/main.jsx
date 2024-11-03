import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import DashBoard from './components/DashBoard';
import BookDetails from './components/BookDetails';
import ListedBooks from './components/ListedBooks';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Chart from './components/Chart';



const router = createBrowserRouter([
  {
    path:'/',
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
         path:'listedBooks',
         element:<ListedBooks></ListedBooks>,
         loader: ()=> fetch('/booksData.json')
      },
      {
      path:'readBooks',
      element:<Chart></Chart>
      },
    {
      path:'dashboard',
      element:<DashBoard></DashBoard>
    },
    {
      path:'/books/:bookId',
      element:<BookDetails></BookDetails>,
      loader: ()=> fetch('/booksData.json')
    }


    ],
  },
 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
     <ToastContainer></ToastContainer>
  </StrictMode>,
)
