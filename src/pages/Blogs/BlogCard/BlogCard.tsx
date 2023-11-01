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
} from '@mui/material'
import { Favorite, Share, MoreVert } from '@mui/icons-material'
import moment from 'moment'

interface Props {
    title: string
    imgUrl: string
    description: string
    date: Date
}

const BlogCard = ({ title, imgUrl, description, date }: Props) => {
    const publishTime: any = new Date(date)
    const dateObject = moment(
        publishTime,
        'ddd MMM DD YYYY HH:mm:ss [GMT]Z (z)',
    )

    const realTime = dateObject.calendar()
    console.log(realTime)
    return (
        <Card sx={{ maxWidth: 400, margin: 2 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: 'red' }} aria-label='recipe'>
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label='settings'>
                        <MoreVert />
                    </IconButton>
                }
                title={title}
                subheader={realTime}
            />
            <CardMedia
                component='img'
                height='194'
                image={
                    imgUrl ||
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzoDghJRdutBzKQYojXNLOXT-QoPFkN3T57ZQF2kTz&s'
                }
                alt='Paella dish'
            />
            <CardContent>
                <Typography variant='body2' color='text.secondary'>
                    {description}
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
        </Card>
    )
}

export default BlogCard

export {}
