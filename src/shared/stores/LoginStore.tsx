import { action, makeObservable, observable } from 'mobx'

export class LoginStore {
    isLoggedIn = false
    rootStore

    constructor(rootStore: any) {
        makeObservable(this, {
            isLoggedIn: observable,
            handleLoggedIn: action,
            setIsLoggedIn: action,
            setIsLogout: action,
        })
        this.rootStore = rootStore
    }
    handleLoggedIn = () => {
        this.isLoggedIn = !this.isLoggedIn
    }

    setIsLoggedIn = () => {
        this.isLoggedIn = true
    }
    setIsLogout = () => {
        this.isLoggedIn = false
    }
}
