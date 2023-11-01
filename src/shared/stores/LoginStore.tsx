import { action, makeObservable, observable } from 'mobx'

interface IUser {
    name: string
    email: string
    password: string
}

export class LoginStore {
    user: IUser[] = []
    isLoggedIn = false
    rootStore

    constructor(rootStore: any) {
        makeObservable(this, {
            user: observable,
            isLoggedIn: observable,
            setUser: action,
            handleLoggedIn: action,
            setIsLoggedIn: action,
            setIsLogout: action,
            // handleLogOut: action,
        })
        this.rootStore = rootStore
    }

    handleLoggedIn = () => {
        this.isLoggedIn = !this.isLoggedIn
    }
    setUser = (form: { name: string; email: string; password: string }) => {
        this.user = [...this.user, form]
    }
    setIsLoggedIn = () => {
        this.isLoggedIn = true
    }
    setIsLogout = () => {
        this.isLoggedIn = false
    }
}
