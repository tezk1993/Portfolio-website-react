import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'



import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { ErrorPage } from './components/Pages/ErrorPage.jsx'
import { ProjectPage } from './components/Projects/ProjectPage/ProjectPage.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element:<App />,
    errorElement: <ErrorPage />
  },
  {
    path: '/projects/:profileid',
    element:<ProjectPage />,
    errorElement: <ErrorPage />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
