import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import BlogList from '../BlogCard/BlogList'
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

const User = ({ allBlogsButton, setAllBlogsButton }: Props) => {
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
            <ShowAllBlogsButton
                allBlogsButton={allBlogsButton}
                setAllBlogsButton={setAllBlogsButton}
            />
            <BlogList blog={blogs} allBlogs={allBlogsButton} />
        </Box>
    )
}

export default User
