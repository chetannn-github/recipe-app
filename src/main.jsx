import React from 'react'
import ReactDOM from 'react-dom/client'
import App, { appRouter } from './App.jsx'
import { RouterProvider } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={appRouter}>
  <React.StrictMode>
    
    <App />
  </React.StrictMode></RouterProvider>,
)
