import {
    Avatar,
    Box,
    Button,
    CardContent,
    InputBase,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    styled,
    Typography,
} from '@mui/material'
import { FormEvent, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ISingleBlog } from '../../shared/interfaces/blog.interface'
import { IUser } from '../../shared/interfaces/user.interface'

const StyledBox = styled(Box)({
    backgroundColor: 'white',
    width: '50%',
    margin: '0 auto',
    padding: '20px',
    borderRadius: '4px',
    boxShadow: '1px 1px 10px gray',
})

const StyledInputBase = styled(Box)({
    padding: '4px',
    width: '100%',
    borderBottom: '1px solid #1f1f1f',
})

interface IComment {
    text: string
    date: string
    user: string
}
interface INotification {
    text: string
    date: string
    user: string
    title: string
}

const SingleBlog = () => {
    const [singleBlog, setSingleBlog] = useState<ISingleBlog>({
        title: '',
        description: '',
        date: '',
        imgUrl: '',
        comments: [],
    })
    const [comment, setComment] = useState('')
    const { id } = useParams()

    useEffect(() => {
        const blogs = JSON.parse(localStorage.getItem('blogData') || 'null')

        console.log(blogs)
        const singleBlog = blogs?.filter((blog: ISingleBlog, i: number) => {
            return blog.title === id
        })
        setSingleBlog(singleBlog[0])
    }, [])

    const handleCommentSubmit = (e: FormEvent) => {
        e.preventDefault()

        const login_user = JSON.parse(
            localStorage.getItem('login_user') || 'null',
        )

        const allBlogs = JSON.parse(localStorage.getItem('users') || 'null')

        if (comment !== '') {
            const newComment: INotification = {
                text: comment,
                date: new Date().toISOString(),
                user: login_user.name,
                title: singleBlog.title,
                // You can add a date timestamp if needed
            }

            const updatedData = allBlogs.map((user: IUser, i: number) => {
                if (user.admin) {
                    return {
                        ...user,
                        notifications: [...user.notifications, newComment],
                    }
                }
                return user
            })
            console.log(updatedData)
            localStorage.setItem('users', JSON.stringify(updatedData))
        }
        setComment('')
    }

    console.log(singleBlog)

    return (
        <Box mt={10}>
            <StyledBox>
                <Typography
                    variant='h4'
                    fontWeight='600'
                    textAlign='center'
                    color='#555'
                >
                    {singleBlog.title}
                </Typography>
                <Typography
                    my={2}
                    variant='subtitle2'
                    color='#333'
                    fontWeight='500'
                >
                    Published: {singleBlog.date}
                </Typography>
                <Typography my={2} variant='subtitle2' color='gray'>
                    {singleBlog.description}
                </Typography>
                <div style={{ maxWidth: '100%' }}>
                    <img
                        style={{ width: '100%', height: '100%' }}
                        src={singleBlog.imgUrl}
                        alt='img'
                    />
                </div>

                <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                        Heat 1/2 cup of the broth in a pot until simmering, add
                        saffron and set aside for 10 minutes.
                    </Typography>
                    <Typography paragraph>
                        Heat oil in a (14- to 16-inch) paella pan or a large,
                        deep skillet over medium-high heat. Add chicken, shrimp
                        and chorizo, and cook, stirring occasionally until
                        lightly browned, 6 to 8 minutes. Transfer shrimp to a
                        large plate and set aside, leaving chicken and chorizo
                        in the pan. Add pimentón, bay leaves, garlic, tomatoes,
                        onion, salt and pepper, and cook, stirring often until
                        thickened and fragrant, about 10 minutes. Add saffron
                        broth and remaining 4 1/2 cups chicken broth; bring to a
                        boil.
                    </Typography>
                    <Typography paragraph>
                        Add rice and stir very gently to distribute. Top with
                        artichokes and peppers, and cook without stirring, until
                        most of the liquid is absorbed, 15 to 18 minutes. Reduce
                        heat to medium-low, add reserved shrimp and mussels,
                        tucking them down into the rice, and cook again without
                        stirring, until mussels have opened and rice is just
                        tender, 5 to 7 minutes more. (Discard any mussels that
                        don&apos;t open.)
                    </Typography>
                    <Typography>
                        Set aside off of the heat to let rest for 10 minutes,
                        and then serve.
                    </Typography>
                </CardContent>
                <Box>
                    <Typography variant='subtitle1' fontWeight={600}>
                        Comments:
                    </Typography>
                </Box>
                <form action=''>
                    <Box display='flex' alignItems='center'>
                        <img
                            height={25}
                            src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'
                            alt=''
                        />
                        <StyledInputBase>
                            <InputBase
                                placeholder='enter your comment'
                                sx={{ padding: '2' }}
                                fullWidth
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                            />
                        </StyledInputBase>
                        <Button
                            variant='text'
                            type='submit'
                            onClick={(e) => handleCommentSubmit(e)}
                        >
                            submit
                        </Button>
                    </Box>
                </form>
                <Box>
                    <List
                        sx={{
                            width: '100%',
                            maxWidth: 360,
                            marginTop: 2,
                            marginLeft: 2,
                        }}
                    >
                        {singleBlog?.comments.map(
                            (comment: IComment, i: number) => (
                                <ListItem sx={{ padding: 0 }}>
                                    <ListItemAvatar>
                                        <Avatar
                                            sx={{ height: 33, width: 33 }}
                                        />
                                    </ListItemAvatar>
                                    <ListItemText
                                        // sx={{ display: 'flex', gap: 2 }}
                                        primary={comment.user}
                                        secondary={comment.text}
                                    />
                                    <Typography
                                        variant='subtitle2'
                                        color='initial'
                                    >
                                        {/* {comment.date} */}
                                    </Typography>
                                </ListItem>
                            ),
                        )}
                        {/* {
                            !Boolean(singleBlog.comments) && '' 
                        } */}
                    </List>
                </Box>
            </StyledBox>
        </Box>
    )
}

export default SingleBlog
