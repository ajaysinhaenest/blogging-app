import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import BlogList from '../BlogCard/BlogList'
import { blogData } from '../../../assets/config'
import AddBlog from '../Addblog/AddBlog'

interface IBlog {
    title: string
    imgUrl: string
    description: string
    date: Date
}

const User = () => {
    const [blogs, setBlogs] = useState<IBlog[]>([])

    useEffect(() => {
        const localStorageData = localStorage.getItem('blogData')
        if (localStorageData) {
            setBlogs(JSON.parse(localStorageData))
        }
    }, [])

    if (blogs.length === 0) return null
    console.log(blogs)
    return (
        <Box mt={8}>
            <BlogList blog={blogs} />
        </Box>
    )
}

export default User
