import { Button } from '@mui/material'
import React from 'react'
interface Props {
    allBlogsButton: boolean
    setAllBlogsButton: React.Dispatch<React.SetStateAction<boolean>>
}

const ShowAllBlogsButton = ({ allBlogsButton, setAllBlogsButton }: Props) => {
    return (
        <Button
            sx={{
                my: { md: 2 },
                display: 'flex',
                justifyContent: 'center',
            }}
            variant='contained'
            size='small'
            color='secondary'
            onClick={() => setAllBlogsButton(!allBlogsButton)}
        >
            {allBlogsButton ? 'View Less' : 'View All Blogs'}
        </Button>
    )
}

export default ShowAllBlogsButton
