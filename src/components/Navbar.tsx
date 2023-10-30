import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import {
    Box,
    AppBar,
    Toolbar,
    Typography,
    Button,
    MenuItem,
    Menu,
} from '@mui/material'
import { Person } from '@mui/icons-material'
import { inject, observer } from 'mobx-react'
import { styled } from '@mui/material/styles'
import getMobxLoginFormValidation from '../validation/MobxLoginFormValidation'
import { fields } from '../common/config'

const StyledToolbar = styled(Toolbar)(() => ({
    display: 'flex',
    justifyContent: 'space-between',
}))
const StyledButton = styled(Button)(() => ({
    color: 'white',
}))

const Navbar = inject('loginStore')(
    observer(({ loginStore }: any) => {
        const [open, setOpen] = useState(false)
        const navigate = useNavigate()

        const handleLogout = () => {
            alert('Logged out successfully')
            loginStore.setIsLogout()
            navigate('/')
        }

        return (
            <Box position='static'>
                <AppBar position='fixed' color='primary'>
                    <StyledToolbar>
                        <Typography variant='h6'>Blogs</Typography>
                        <StyledButton>
                            {loginStore.isLoggedIn && (
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
                </AppBar>
            </Box>
        )
    }),
)

export default Navbar
