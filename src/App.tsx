import React from 'react'
import { Box } from '@mui/material'
import Navbar from './components/Navbar'
import { Outlet, createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login'
import Blogs from './pages/Blogs'
function App() {
    return (
        <Box>
            <Navbar />
            <Outlet />
        </Box>
    )
}

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Login />,
            },
            {
                path: '/blog',
                element: <Blogs />,
            },
            {},
        ],
    },
])

export default App
