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

interface IComment {
    text: string
    date: string
    user: string
}

const StyledModal = styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})

const Notifications = inject('loginStore')(
    observer(() => {
        const [admin, setAdmin] = useState<IUser>({
            admin: true,
            email: '',
            name: '',
            notifications: [],
            password: '',
        })
        const [open, setOpen] = useState(false)

        useEffect(() => {
            const users = JSON.parse(localStorage.getItem('users') || 'null')
            const admin = users.filter((user: IUser, i: number) => user.admin)
            console.log(admin[0])
            setAdmin(admin[0])
        }, [])

        const handleDone = (text: string) => {
            const filteredNotifications = admin?.notifications?.filter(
                (comment: IComment, i) => {
                    return comment.text !== text
                },
            )
            console.log(filteredNotifications)
            setAdmin({ ...admin, notifications: filteredNotifications })
        }
        const handleClose = (text: string) => {
            const filteredNotifications = admin?.notifications?.filter(
                (comment: IComment, i) => {
                    return comment.text !== text
                },
            )
            console.log(filteredNotifications)
            setAdmin({ ...admin, notifications: filteredNotifications })
        }
        console.log(admin)
        return (
            <>
                <Tooltip
                    onClick={() => setOpen(true)}
                    title='Add Blog'
                    sx={{
                        position: 'fixed',
                        bottom: 20,
                        left: { xs: 'calc(50% - 25px)', md: 30 },
                    }}
                >
                    <Fab color='primary' aria-label='add'>
                        <Add />
                    </Fab>
                </Tooltip>
                <StyledModal
                    open={true}
                    onClose={() => setOpen(false)}
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
                                (comment: IComment, i: number) => (
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
                                            <Box display='flex' gap={2}>
                                                <Done
                                                    color='success'
                                                    onClick={() =>
                                                        handleDone(comment.text)
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
