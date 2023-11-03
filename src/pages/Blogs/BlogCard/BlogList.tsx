import { useEffect, useState } from 'react'
import { Box, styled, Button } from '@mui/material'

import BlogCard from './BlogCard'
interface blogData {
    title: string
    date: Date
    imgUrl: string
    description: string
}

interface Props {
    blog: blogData[]
    allBlogs: boolean
}

const StyledBox = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
}))

const BlogList = ({ blog, allBlogs }: Props) => {
    const [blogCount, setBlogCount] = useState(6)

    useEffect(() => {
        if (allBlogs) {
            setBlogCount(blog.length)
        } else {
            setBlogCount(6)
        }
    }, [allBlogs, blog.length])

    return (
        <Box
            display='flex'
            justifyContent='center'
            sx={{
                pt: { xs: 16, md: 2 },
                pl: { xs: 0, md: 24 },
                backgroundColor: 'lightskyblue',
            }}
        >
            <StyledBox>
                {blog.slice(0, blogCount).map((blog: blogData, i: number) => (
                    <BlogCard key={i} {...blog} />
                ))}
            </StyledBox>
        </Box>
    )
}

export default BlogList
