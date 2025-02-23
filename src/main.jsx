import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import {createBrowserRouter,RouterProvider } from "react-router-dom";
import App from './App.jsx'
import EventDetail from './components/EventDetail.jsx';

const router=createBrowserRouter([
  {path:"/",element:<App/>},
  { path: "/event/:eventId", element: <EventDetail /> },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
