import { action, makeObservable, observable } from 'mobx'
// import { RootStore } from '../app/store'

interface IUserDetails {
    name: string
    email: string
}

export class LoginStore {
    userDetails: IUserDetails = {
        name: '',
        email: '',
    }
    isLoggedIn = false
    rootStore

    constructor(rootStore: any) {
        makeObservable(this, {
            userDetails: observable,
            isLoggedIn: observable,
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
    setUserDetails = (form: {
        name: string
        email: string
        password: string
    }) => {
        this.userDetails.name = form.name
        this.userDetails.email = form.email
    }
    setIsLoggedIn = () => {
        this.isLoggedIn = true
    }
    setIsLogout = () => {
        this.isLoggedIn = false
    }
}
