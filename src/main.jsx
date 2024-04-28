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
import MyList from './Components/My List/MyList';
import UpdateSpot from './Components/Update a Spot/UpdateSpot';
import CountrySpots from './Components/Country Spots/CountrySpots';
import Profile from './Components/Profile/Profile';
import WeatherWidget from './Components/Weather Widget/WeatherWidget';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://europe-odyssey-server.vercel.app/spots")
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
        loader: ({params}) => fetch(`https://europe-odyssey-server.vercel.app/spots/${params.id}`)
      },
      {
        path: "/addSpot",
        element: <PrivateRoute><AddSpot></AddSpot></PrivateRoute>
      },
      {
        path: "allSpots",
        element: <AllSpots></AllSpots>,
        loader: () => fetch("https://europe-odyssey-server.vercel.app/allSpots")
      },
      {
        path: "/myList/:email",
        element: <PrivateRoute><MyList></MyList></PrivateRoute>,
        loader: ({params}) => fetch(`https://europe-odyssey-server.vercel.app/allSpots/${params.email}`)
      },
      {
        path: "/updateSpot/:id",
        element: <PrivateRoute><UpdateSpot></UpdateSpot></PrivateRoute>,
        loader: ({params}) => fetch(`https://europe-odyssey-server.vercel.app/spots/${params.id}`)
      },
      {
        path: "/countrySpots/:country",
        element: <CountrySpots></CountrySpots>,
        loader: ({params}) => fetch(`https://europe-odyssey-server.vercel.app/countrySpots/${params.country}`)
      },
      {
        path: "/profile",
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path: "/weatherWidget",
        element: <WeatherWidget></WeatherWidget>
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
