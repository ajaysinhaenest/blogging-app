interface IComment {
    text: string
    date: string
    user: string
}
export interface IUser {
    name: string
    email: string
    password: string
    admin: boolean
    notifications: IComment[]
}
