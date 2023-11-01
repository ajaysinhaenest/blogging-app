import React from 'react'
import { Box, styled, Button } from '@mui/material'

import BlogCard from '../../pages/Blogs/BlogCard/BlogCard'
interface blogData {
    title: string
    date: Date
    imgUrl: string
    description: string
}

interface Props {
    blog: blogData[]
}

const StyledButton = styled(Button)(() => ({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    // margin: '20px',
}))

const BlogList = ({ blog }: Props) => {
    console.log(blog)

    return (
        <Box display='flex' justifyContent='center'>
            <StyledButton>
                {blog.map((blog: blogData, i: number) => (
                    <BlogCard key={i} {...blog} />
                ))}
            </StyledButton>
        </Box>
    )
}

export default BlogList
