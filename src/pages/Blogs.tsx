import { Box } from '@mui/material'
import React from 'react'
import BlogList from '../components/BlogList'
import { blogDate } from '../common/config'

const Blogs = () => {
    // console.log(blogDate)
    const jsonArray = JSON.stringify(blogDate)

    // Store it in localStorage under a specific key
    localStorage.setItem('blogData', jsonArray)
    return (
        <Box mt={8}>
            <BlogList />
        </Box>
    )
}

export default Blogs
