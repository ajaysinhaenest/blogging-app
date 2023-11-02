import { Box, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import BlogList from '../BlogCard/BlogList'
import AddBlog from '../Addblog/AddBlog'
import ShowAllBlogsButton from '../../../shared/components/ShowAllBlogsButton'

interface IBlog {
    title: string
    imgUrl: string
    description: string
    date: Date
}

interface Props {
    allBlogsButton: boolean
    setAllBlogsButton: React.Dispatch<React.SetStateAction<boolean>>
}

const Admin = ({ allBlogsButton, setAllBlogsButton }: Props) => {
    const [blogs, setBlogs] = useState<IBlog[]>([])
    // const [allBlogsButton, setAllBlogsButton] = useState(false)

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
            <Box>
                <Box
                    zIndex={10}
                    position='fixed'
                    sx={{
                        width: { xs: '100%', sm: 230 },
                        bgcolor: 'cyan',
                        p: 3,
                    }}
                >
                    <Typography
                        variant='h6'
                        color='black'
                        display='flex'
                        justifyContent='center'
                        mb={2}
                    >
                        Admin Dashboard
                    </Typography>
                    <Box
                        sx={{
                            display: { xs: 'flex', sm: 'block' },
                            height: { md: '100vh' },
                            justifyContent: 'center',
                        }}
                        gap={2}
                    >
                        {/* <Button
                            sx={{
                                my: { md: 2 },
                            }}
                            variant='contained'
                            size='small'
                            color='secondary'
                            onClick={() => setAllBlogsButton(!allBlogsButton)}
                        >
                            {allBlogsButton ? 'View Less' : 'View All Blogs'}
                        </Button> */}
                        <ShowAllBlogsButton
                            allBlogsButton={allBlogsButton}
                            setAllBlogsButton={setAllBlogsButton}
                        />
                    </Box>
                </Box>
            </Box>

            <BlogList blog={blogs} allBlogs={allBlogsButton} />
            <AddBlog blogs={blogs} setBlogs={setBlogs} />
        </Box>
    )
}

export default Admin
