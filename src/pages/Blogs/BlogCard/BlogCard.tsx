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
    InputBase,
    styled,
    Button,
} from '@mui/material'
import { Favorite, Share, MoreVert } from '@mui/icons-material'
import moment from 'moment'
import { Link } from 'react-router-dom'

interface Props {
    title: string
    imgUrl: string
    description: string
    date: Date
}

const StyledButton = styled(Button)({
    backgroundColor: 'cyan',
    width: '100%',
    height: 35,
})
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
            <StyledButton>
                <Link to={'/blog/' + title}>
                    <Button size='small' variant='text' color='secondary'>
                        Explore More
                    </Button>
                </Link>
            </StyledButton>
            {/* <StyledInput>
                <InputBase fullWidth color='secondary' />
            </StyledInput> */}
        </Card>
    )
}

export default BlogCard

export {}
