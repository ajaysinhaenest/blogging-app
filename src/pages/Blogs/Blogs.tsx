import React, { useEffect, useState } from 'react'
import Admin from './Admin/Admin'
import User from './User/User'

const Blogs = () => {
    const [isAdmin, setIsAdmin] = useState<boolean>(false)

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('login_user') || 'null')
        console.log(user)
        if (user) {
            setIsAdmin(user.admin)
        }
    }, [])
    console.log(isAdmin)
    return <>{isAdmin ? <Admin /> : <User />}</>
}

export default Blogs
