import { Add } from '@mui/icons-material'
import {
    Box,
    Button,
    Fab,
    Modal,
    TextField,
    Tooltip,
    Typography,
    styled,
} from '@mui/material'
import React, { useMemo, useState } from 'react'
import getMobxFormValidation from '../../../shared/validation/MobxLoginFormValidation'
import { blogFields } from '../../../assets/config'
import { inject, observer } from 'mobx-react'

interface IBlog {
    title: string
    imgUrl: string
    description: string
    date: Date
}

interface Props {
    // loginStore:any
    blog: IBlog[]
    setBlogs: React.Dispatch<React.SetStateAction<IBlog[]>>
}

const StyledModal = styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})

const AddBlog = inject('loginStore')(
    observer(({ blog, setBlogs }: Props) => {
        const [open, setOpen] = useState(false)
        const blogForm = useMemo(() => getMobxFormValidation(blogFields), [])

        // console.log(blogData)

        const handleSubmit = (e: React.FormEvent) => {
            e.preventDefault()
            console.log(blogForm.values())
            console.log('submitted successfully')
            const updatedData = [...blog, blogForm.values()]
            setBlogs(updatedData)
            // console.log(blogForm.values())
            // blogData.push(blogForm.values())

            // const jsonArray = JSON.stringify(blogData)
            localStorage.setItem('blogData', JSON.stringify(updatedData))
            setOpen(false)
            blogForm.clear()
        }

        const handleFileChange = (e: any) => {
            const file = e.target.files ? e.target.files[0] : null
            console.log(file)
            if (file) {
                const url = URL.createObjectURL(file)
                console.log(url)
                blogForm.$('imgUrl').set(url)
            }
        }

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
                    open={open}
                    onClose={() => setOpen(false)}
                    aria-labelledby='modal-modal-title'
                    aria-describedby='modal-modal-description'
                >
                    <Box width={400} bgcolor='white' p={3} borderRadius={4}>
                        <Typography
                            variant='h6'
                            color='gray'
                            textAlign='center'
                        >
                            Create Blog
                        </Typography>
                        <form>
                            <TextField
                                size='small'
                                color='primary'
                                variant='outlined'
                                fullWidth
                                margin='normal'
                                {...blogForm.$('title').bind()}
                            />

                            <Typography color='error' sx={{ mb: 1 }}>
                                {blogForm.$('title').error}
                            </Typography>
                            <TextField
                                size='small'
                                color='primary'
                                variant='outlined'
                                fullWidth
                                margin='normal'
                                {...blogForm.$('description').bind()}
                            />
                            <Typography color='error' sx={{ mb: 1 }}>
                                {blogForm.$('description').error}
                            </Typography>
                            <TextField
                                size='small'
                                color='primary'
                                variant='outlined'
                                fullWidth
                                margin='normal'
                                {...blogForm.$('date').bind()}
                            />
                            <Typography color='error' sx={{ mb: 1 }}>
                                {blogForm.$('date').error}
                            </Typography>
                            <TextField
                                size='small'
                                color='primary'
                                variant='outlined'
                                fullWidth
                                margin='normal'
                                type='file'
                                onChange={(e) => handleFileChange(e)}
                            />
                            <Typography color='error' sx={{ mb: 1 }}>
                                {blogForm.$('imgUrl').error}
                            </Typography>
                            <Button
                                variant='contained'
                                color='primary'
                                fullWidth
                                type='submit'
                                onClick={(e) => handleSubmit(e)}
                            >
                                Add Blog
                            </Button>
                        </form>
                    </Box>
                </StyledModal>
            </>
        )
    }),
)

export default AddBlog
