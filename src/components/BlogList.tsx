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

const StyledButton = styled(Button)(() => ({
    // display: 'flex',
    // justifyContent: 'center',
    // flexDirection: 'column',
}))

const BlogList = () => {
    return (
        <Box display='flex' justifyContent='center'>
            <StyledButton>
                <Card sx={{ maxWidth: 345 }}>
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
                        title='Shrimp and Chorizo Paella'
                        subheader='September 14, 2016'
                    />
                    <CardMedia
                        component='img'
                        height='194'
                        image='https://mui.com/static/images/cards/paella.jpg'
                        alt='Paella dish'
                    />
                    <CardContent>
                        <Typography variant='body2' color='text.secondary'>
                            This impressive paella is a perfect party dish and a
                            fun meal to cook together with your guests. Add 1
                            cup of frozen peas along with the mussels, if you
                            like.
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
                        title='Shrimp and Chorizo Paella'
                        subheader='September 14, 2016'
                    />
                    <CardMedia
                        component='img'
                        height='194'
                        image='https://mui.com/static/images/cards/contemplative-reptile.jpg'
                        alt='Paella dish'
                    />
                    <CardContent>
                        <Typography variant='body2' color='text.secondary'>
                            This impressive paella is a perfect party dish and a
                            fun meal to cook together with your guests. Add 1
                            cup of frozen peas along with the mussels, if you
                            like.
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
            </StyledButton>
        </Box>
    )
}

export default BlogList
