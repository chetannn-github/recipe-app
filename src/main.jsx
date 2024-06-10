import React from 'react'
import ReactDOM from 'react-dom/client'
import App, { appRouter } from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import appstore from './utils/redux/appstore.js'


ReactDOM.createRoot(document.getElementById('root')).render(<Provider store={appstore}  >
<RouterProvider router={appRouter}>
  
    
    <App />
  </RouterProvider></Provider>,
)
