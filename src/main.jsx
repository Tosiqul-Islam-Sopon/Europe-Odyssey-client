import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import Login from './Components/Authentication/Login';
import Register from './Components/Authentication/Register';
import AuthProvider from './Components/Providers/AuthProvider';
import SpotDetails from './Components/SpotDetails/SpotDetails';
import PrivateRoute from './PrivateRoute';
import AddSpot from './Components/Add a Spot/AddSpot';
import AllSpots from './Components/All Spots/AllSpots';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/spots")
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/spotDetails/:id",
        element: <PrivateRoute><SpotDetails></SpotDetails></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/spots/${params.id}`)
      },
      {
        path: "/addSpot",
        element: <PrivateRoute><AddSpot></AddSpot></PrivateRoute>
      },
      {
        path: "allSpots",
        element: <AllSpots></AllSpots>,
        loader: () => fetch("http://localhost:5000/allSpots")
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
