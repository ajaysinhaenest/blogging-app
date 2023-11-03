interface IComment {
    text: string
    date: string
    user: string
}
interface INotification {
    text: string
    date: string
    user: string
    title: string
}
export interface IUser {
    name: string
    email: string
    password: string
    admin: boolean
    notifications: INotification[]
}
