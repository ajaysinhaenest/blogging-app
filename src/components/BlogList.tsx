import React from 'react'
import {
    Card,
    CardHeader,
    Avatar,
    IconButton,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Box,
    styled,
    Button,
} from '@mui/material'
import { Favorite, Share, MoreVert } from '@mui/icons-material'
// import { blogDate } from '../common/config'

interface blogDate {
    title: string
    date: Date
    imgUrl: string
    description: string
}

const StyledButton = styled(Button)(() => ({
    // display: 'flex',
    // justifyContent: 'center',
    // flexDirection: 'column',
}))

const BlogList = () => {
    const blogData = localStorage.getItem('blogData')

    // Parse the JSON string back to an array of objects
    const retrievedblogs = JSON.parse(blogData || 'null')
    console.log(retrievedblogs)
    // console.log(retrievedblogs?.date)
    // const timestamp = "2023-09-17T02:00:49.307Z";
    // const realDate = new Date(timestamp);

    // console.log(realDate);

    return (
        <Box display='flex' justifyContent='center'>
            <StyledButton>
                <Card sx={{ maxWidth: 345 }}>
                    {retrievedblogs.map((blog: blogDate) => (
                        <>
                            <CardHeader
                                avatar={
                                    <Avatar
                                        sx={{ bgcolor: 'red' }}
                                        aria-label='recipe'
                                    >
                                        R
                                    </Avatar>
                                }
                                action={
                                    <IconButton aria-label='settings'>
                                        <MoreVert />
                                    </IconButton>
                                }
                                title={blog.title}
                                // subheader={new Date(retrievedblogs.date)}
                            />
                            <CardMedia
                                component='img'
                                height='194'
                                image={blog.imgUrl}
                                alt='Paella dish'
                            />
                            <CardContent>
                                <Typography
                                    variant='body2'
                                    color='text.secondary'
                                >
                                    {blog.description}
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label='add to favorites'>
                                    <Favorite />
                                </IconButton>
                                <IconButton aria-label='share'>
                                    <Share />
                                </IconButton>
                            </CardActions>
                        </>
                    ))}
                </Card>
            </StyledButton>
        </Box>
    )
}

export default BlogList
