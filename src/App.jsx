import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Home from './pages/Home'
import EditProfile from './pages/EditProfile'
import Auth from './pages/Auth'
import PrivateRoutes from './components/PrivateRoutes'

function App() {

  return (
    <>
        <Toaster 
            position='top-center'
            toastOptions={{
                style: {
                    fontSize: '1.8rem'
                }
            }}
        ></Toaster>
        <Routes>
            <Route element={<PrivateRoutes />}>
                <Route path="/" element={<Home />} />
                <Route path="/edit-profile" element={<EditProfile />} />
            </Route>
            <Route path="/auth" element={<Auth />} />
        </Routes>
    </>
  )
}

export default App