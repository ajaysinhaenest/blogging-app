import { LoginStore } from '../stores/LoginStore'

class RootStore {
    loginStore
    constructor() {
        this.loginStore = new LoginStore(this)
    }
}

export default RootStore
