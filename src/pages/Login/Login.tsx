import { useMemo, useEffect } from 'react'
// import { toJS } from 'mobx'
import { useNavigate } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import { Box, TextField, Button, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { loginFields } from './Login.fields'
import getMobxFormValidation from '../../shared/validation/MobxLoginFormValidation'
import { generateRandomToken } from '../../shared/utils/helperFunctions'

const StyledBox = styled(Box)(() => ({
    backgroundColor: 'white',
    width: 360,
    padding: '20px',
    marginTop: '120px',
    borderRadius: '4px',
    boxShadow: '2px 1px 10px gray',
}))

const Login = inject('loginStore')(
    observer(({ loginStore }: any) => {
        const token = generateRandomToken()
        console.log(token)
        const navigate = useNavigate()
        const form = useMemo(() => getMobxFormValidation(loginFields), [])

        const handleSubmit = (e: React.FormEvent) => {
            e.preventDefault()

            const { email, password } = form.values()
            const storedUser = JSON.parse(
                localStorage.getItem('user') || 'null',
            )
            console.log(storedUser)

            if (storedUser) {
                if (
                    email === storedUser.email &&
                    password === storedUser.password
                ) {
                    alert('Login successful.')
                    loginStore.setIsLoggedIn()
                    navigate('/blog')
                    form.reset()
                    return null
                } else {
                    alert('Login failed. Check your credentials.')
                    return null
                }
            }

            form.submit({
                onSuccess: () => {
                    localStorage.setItem('user', JSON.stringify(form.values()))
                    alert('User registered successfully.')
                    loginStore.setIsLoggedIn()
                    navigate('/blog')
                    form.reset()
                },
                onError: (error: string) => console.log(error),
            })
            console.log(form.values())
            console.log(loginStore.userDetails)
        }

        return (
            <Box display='flex' justifyContent='center' bgcolor='secondary'>
                <StyledBox>
                    <h2> {loginStore.isLoggedIn ? 'Log In' : 'Sign UP'}</h2>
                    <form>
                        {!loginStore.isLoggedIn && (
                            <>
                                <TextField
                                    size='small'
                                    color='primary'
                                    variant='outlined'
                                    fullWidth
                                    margin='normal'
                                    {...form.$('name').bind()}
                                />

                                <Typography color='error' sx={{}}>
                                    {form.$('name').error}
                                </Typography>
                            </>
                        )}
                        <TextField
                            size='small'
                            color='primary'
                            variant='outlined'
                            fullWidth
                            margin='normal'
                            {...form.$('email').bind()}
                        />

                        <Typography color='error' sx={{ mb: 1 }}>
                            {form.$('email').error}
                        </Typography>
                        <TextField
                            size='small'
                            fullWidth
                            color='primary'
                            variant='outlined'
                            fulln='normal'
                            {...form.$('password').bind()}
                        />

                        <Typography color='error' sx={{ mb: 1 }}>
                            {form.$('password').error}
                        </Typography>
                        <Typography>
                            {loginStore.isLoggedIn
                                ? 'Create Your Account? '
                                : 'Already have An Account? '}
                            <Button
                                variant='text'
                                size='small'
                                color='error'
                                onClick={() => loginStore.handleLoggedIn()}
                            >
                                {loginStore.isLoggedIn ? 'Sign UP' : 'Log In'}
                            </Button>
                        </Typography>
                        <Button
                            variant='contained'
                            color='primary'
                            fullWidth
                            type='submit'
                            onClick={(e) => handleSubmit(e)}
                        >
                            Login
                        </Button>
                    </form>
                </StyledBox>
            </Box>
        )
    }),
)

export default Login
