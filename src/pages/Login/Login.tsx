import { useMemo, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import { Box, TextField, Button, Typography, Checkbox } from '@mui/material'
import { styled } from '@mui/material/styles'
import { loginFields } from './Login.fields'
import getMobxFormValidation from '../../shared/validation/MobxLoginFormValidation'
import { IUser } from '../../shared/interfaces/user.interface'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

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
        const [user, setUser] = useState<IUser[]>([])
        const form = useMemo(() => getMobxFormValidation(loginFields), [])

        const navigate = useNavigate()

        useEffect(() => {
            const storedData = localStorage.getItem('users')
            if (storedData) {
                setUser(JSON.parse(storedData))
            }
            const loginUser = JSON.parse(
                localStorage.getItem('login_user') || 'null',
            )

            if (loginUser) {
                navigate('/blog')
            }
        }, [])

        const handleSubmit = (e: React.FormEvent) => {
            e.preventDefault()

            console.log(form.values())
            const { email, password } = form.values()

            const storedUsers = JSON.parse(
                localStorage.getItem('users') || 'null',
            )

            const userlogin = storedUsers?.filter((el: IUser, i: number) => {
                return el.email === email && el.password === password
            })

            console.log(userlogin)

            if (userlogin?.length) {
                console.log(userlogin[0].email, userlogin[0].password)
                if (
                    email === userlogin[0].email &&
                    password === userlogin[0].password
                ) {
                    alert('Login successful.')
                    localStorage.setItem(
                        'login_user',
                        JSON.stringify(userlogin[0]),
                    )

                    navigate('/blog')
                    form.reset()
                    return null
                } else {
                    alert('check your credentials')
                }
            }

            form.submit({
                onSuccess: () => {
                    console.log(form.values())

                    if (form.values().admin) {
                        setUser((prevState) => [
                            ...prevState,
                            { ...form.values(), notifications: [] },
                        ])

                        localStorage.setItem(
                            'users',
                            JSON.stringify([
                                ...user,
                                { ...form.values(), notifications: [] },
                            ]),
                        )

                        localStorage.setItem(
                            'login_user',
                            JSON.stringify({
                                ...form.values(),
                                notifications: [],
                            }),
                        )
                    } else {
                        setUser((prevState) => [...prevState, form.values()])

                        localStorage.setItem(
                            'users',
                            JSON.stringify([...user, form.values()]),
                        )

                        localStorage.setItem(
                            'login_user',
                            JSON.stringify(form.values()),
                        )
                    }
                    alert('User registered successfully.')
                    form.reset()
                    navigate('/blog')
                },
                onError: (error: string) => console.log(error),
            })

            console.log(form.values())
        }

        console.log(user)
        return (
            <Box display='flex' justifyContent='center' bgcolor='secondary'>
                <StyledBox>
                    <Box display='flex' justifyContent='center'>
                        <Typography variant='h4'>
                            {loginStore.isLoggedIn ? 'Log In' : 'Sign UP'}
                        </Typography>
                    </Box>
                    <form>
                        {!loginStore.isLoggedIn && (
                            <>
                                <Typography
                                    display='flex'
                                    justifyContent='center'
                                    alignItems='center'
                                    my={1}
                                    variant='h6'
                                    color='initial'
                                >
                                    Admin:{' '}
                                    <Checkbox
                                        {...form.$('admin').bind()}
                                        {...label}
                                    />
                                </Typography>
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
                            {loginStore.isLoggedIn ? 'Log In' : 'Sign UP'}
                        </Button>
                    </form>
                </StyledBox>
            </Box>
        )
    }),
)

export default Login
