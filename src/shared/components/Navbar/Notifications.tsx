import { Add } from '@mui/icons-material'
import {
    Avatar,
    Box,
    Fab,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Modal,
    Tooltip,
    Typography,
    styled,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { Done, Close } from '@mui/icons-material'
import { inject, observer } from 'mobx-react'
import { IUser } from '../../interfaces/user.interface'
import { ISingleBlog } from '../../interfaces/blog.interface'

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
const StyledModal = styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})

interface Props {
    openNotification: boolean
    setOpenNotification: React.Dispatch<React.SetStateAction<boolean>>
}

const Notifications = inject('loginStore')(
    observer(({ openNotification, setOpenNotification }: Props) => {
        const [admin, setAdmin] = useState<IUser>({
            admin: true,
            email: '',
            name: '',
            notifications: [],
            password: '',
        })
        useEffect(() => {
            const users = JSON.parse(localStorage.getItem('users') || 'null')
            if (users) {
                const admin = users?.filter(
                    (user: IUser, i: number) => user.admin,
                )
                setAdmin(admin[0])
            }
        }, [])

        const handleDone = (title: string, text: string) => {
            const users = JSON.parse(localStorage.getItem('users') || 'null')
            const allBlogs = JSON.parse(
                localStorage.getItem('blogData') || 'null',
            )

            const notification = admin?.notifications?.filter(
                (comment: IComment, i) => {
                    return comment.text === text
                },
            )

            const updatedData = allBlogs.map((blog: ISingleBlog, i: number) => {
                if (blog.title === title) {
                    return {
                        ...blog,
                        comments: [...blog.comments, ...notification],
                    }
                }
                return blog
            })
            console.log(updatedData)
            localStorage.setItem('blogData', JSON.stringify(updatedData))

            const filteredNotifications = admin?.notifications?.filter(
                (comment: IComment, i) => {
                    return comment.text !== text
                },
            )
            console.log(filteredNotifications)
            setAdmin({ ...admin, notifications: filteredNotifications })

            const updatedUsers = users?.map((user: IUser, i: number) => {
                if (user.admin) {
                    return { ...admin, notifications: filteredNotifications }
                }

                return user
            })
            console.log(updatedUsers)
            localStorage.setItem('users', JSON.stringify(updatedUsers))
        }
        const handleClose = (text: string) => {
            const users = JSON.parse(localStorage.getItem('users') || 'null')

            const filteredNotifications = admin?.notifications?.filter(
                (comment: IComment, i) => {
                    return comment.text !== text
                },
            )
            console.log(filteredNotifications)
            setAdmin({ ...admin, notifications: filteredNotifications })

            const updatedUsers = users?.map((user: IUser, i: number) => {
                if (user.admin) {
                    return { ...admin, notifications: filteredNotifications }
                }

                return user
            })
            console.log(updatedUsers)
            localStorage.setItem('users', JSON.stringify(updatedUsers))
        }

        // console.log(admin)
        return (
            <>
                <StyledModal
                    open={openNotification}
                    onClose={() => setOpenNotification(false)}
                    aria-labelledby='modal-modal-title'
                    aria-describedby='modal-modal-description'
                >
                    <Box width={400} bgcolor='white' p={3} borderRadius={4}>
                        <List
                            sx={{
                                width: '100%',
                                maxWidth: 360,
                                marginTop: 2,
                                marginLeft: 2,
                            }}
                        >
                            {admin?.notifications?.map(
                                (comment: INotification, i: number) => (
                                    <>
                                        <Box
                                            display='flex'
                                            justifyContent='space-between'
                                        >
                                            <ListItem sx={{ padding: 0 }}>
                                                <ListItemAvatar>
                                                    <Avatar
                                                        sx={{
                                                            height: 33,
                                                            width: 33,
                                                        }}
                                                    />
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary={
                                                        comment.user +
                                                        ' commented on ' +
                                                        comment.title +
                                                        ' blog'
                                                    }
                                                    secondary={comment.text}
                                                />
                                                <Typography
                                                    variant='subtitle2'
                                                    color='initial'
                                                >
                                                    {/* {comment.date} */}
                                                </Typography>
                                            </ListItem>
                                            <Box display='flex' gap={2}>
                                                <Done
                                                    color='success'
                                                    onClick={() =>
                                                        handleDone(
                                                            comment.title,
                                                            comment.text,
                                                        )
                                                    }
                                                />
                                                <Close
                                                    color='error'
                                                    onClick={() =>
                                                        handleClose(
                                                            comment.text,
                                                        )
                                                    }
                                                />
                                            </Box>
                                        </Box>
                                    </>
                                ),
                            )}
                        </List>
                    </Box>
                </StyledModal>
            </>
        )
    }),
)

export default Notifications
