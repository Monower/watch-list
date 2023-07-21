import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout';
import Test from './pages/Test';
import Home from './pages/Home';
import Error from './pages/Error';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
{/*     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='test' element={<Test />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter> */}
    <App />
  </React.StrictMode>,
)
