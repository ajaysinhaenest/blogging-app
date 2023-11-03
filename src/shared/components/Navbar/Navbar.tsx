import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Notifications from './Notifications'
import {
    Box,
    AppBar,
    Toolbar,
    Typography,
    Button,
    MenuItem,
    Menu,
    Badge,
} from '@mui/material'

import { Mail, Person } from '@mui/icons-material'
import { inject, observer } from 'mobx-react'
import { styled } from '@mui/material/styles'

const StyledToolbar = styled(Toolbar)(() => ({
    display: 'flex',
    justifyContent: 'space-between',
}))

const StyledButton = styled(Button)(() => ({
    color: 'white',
    gap: 30,
}))

const StyledTypography = styled(Typography)({
    textDecoration: 'none',
    color: 'white',
})

const Navbar = inject('loginStore')(
    observer(({ loginStore }: any) => {
        const [loggedIn, setLoggedIn] = useState<boolean>(false)
        const [open, setOpen] = useState(false)
        const [openNotification, setOpenNotification] = useState(false)
        const navigate = useNavigate()

        useEffect(() => {
            const loginUser = JSON.parse(
                localStorage.getItem('login_user') || 'null',
            )
            setLoggedIn(!!loginUser)
        }, [loggedIn])

        const handleLogout = () => {
            alert('Logged out successfully')
            localStorage.removeItem('login_user')
            navigate('/')
        }

        return (
            <Box position='static'>
                <AppBar position='fixed' color='primary'>
                    <StyledToolbar>
                        <Link to='/'>
                            <StyledTypography variant='h6'>
                                Blogs
                            </StyledTypography>
                        </Link>
                        <StyledButton>
                            <Badge
                                badgeContent={4}
                                color='success'
                                onClick={() =>
                                    setOpenNotification(!openNotification)
                                }
                            >
                                <Mail color='action' />
                            </Badge>
                            {loggedIn && (
                                <>
                                    <Person onClick={() => setOpen(true)} />
                                    <Menu
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        open={open}
                                        onClose={() => setOpen(false)}
                                    >
                                        <MenuItem>
                                            <Button
                                                variant='outlined'
                                                color='error'
                                                onClick={() => handleLogout()}
                                            >
                                                Logout
                                            </Button>
                                        </MenuItem>
                                    </Menu>
                                </>
                            )}
                        </StyledButton>
                    </StyledToolbar>
                    <Notifications
                        openNotification={openNotification}
                        setOpenNotification={setOpenNotification}
                    />
                </AppBar>
            </Box>
        )
    }),
)

export default Navbar
