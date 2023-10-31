import './App.css'
import { Box } from '@mui/material'
import Navbar from './shared/components/Navbar'
import { Outlet, createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login/Login'
import Blogs from './pages/Blogs/Blogs'
import AddBlog from './pages/Blogs/Addblog/AddBlog'
import { blogData } from './assets/config'

function App() {
    // const jsonArray = JSON.stringify(blogData)
    // localStorage.setItem('blogData', jsonArray)
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
                element: (
                    <>
                        {/* <Blogs /> */}
                        {/* <AddBlog /> */}
                    </>
                ),
            },
            {},
        ],
    },
])

export default App
