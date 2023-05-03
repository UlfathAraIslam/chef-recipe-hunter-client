import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, RouterProvider } from 'react-router-dom';
import router from './routes/Routes.jsx';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import AuthProvider from './providers/AuthProvider';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}>
    <Route path="*" element={<NotFoundPage />} />
    </RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
