import { Box, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import BlogList from '../BlogCard/BlogList'

interface IBlog {
    title: string
    imgUrl: string
    description: string
    date: Date
}

const Admin = () => {
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
        <Box
            mt={7}
            display='flex'
            sx={{ display: { xs: 'block', md: 'flex' } }}
            gap={6}
        >
            <Box
                sx={{
                    width: { sm: '100%', md: 250 },
                    bgcolor: 'cyan',
                    p: 3,
                }}
            >
                <Typography variant='h6' color='black'>
                    Admin Dashboard
                </Typography>
                <Box
                    sx={{
                        display: { xs: 'flex', sm: 'block' },
                        height: { md: '100vh' },
                    }}
                    gap={2}
                >
                    <Button
                        sx={{
                            my: { md: 2 },
                            // marginBottom: { sm: 0, md: 2 },
                        }}
                        variant='contained'
                        size='large'
                        color='secondary'
                    >
                        All Blogs
                    </Button>
                    <Button variant='contained' size='large' color='secondary'>
                        Add new Blog
                    </Button>
                </Box>
            </Box>

            <BlogList blog={blogs} />
        </Box>
    )
}

export default Admin
