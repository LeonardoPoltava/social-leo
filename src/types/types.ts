// header
export type HeaderPropsType = {
    isAuth: string,
    login: string
}
export type HeaderContainerType = {
    isAuth: string,
    login: string
    getLogoutUserData: any
}
// login
export type LoginFormProps = {
    handleSubmit: any,
    error: string,
    captchaUrl: string | null
}
export type LoginContainerProps = {
    captchaUrl: string | null,
    isAuth: string,
    login: string
}
// other
export type PostsType = {
    id: number | null
    message: string | null,
    likesCount: number | null
}
export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type PhotosType = {
    small: string | null
    large: string | null
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string,
    fullName: string
    contacts: ContactsType,
    photos: PhotosType
}
export type UsersType = {
    id: number
    name: string
    status: string | null
    photos: PhotosType
}
// dialogs
export type DialogsElementType = {
    avatar: string | null,
    id: number| null,
    name: string| null
}
export type MessagesElementType = {
    message: string | null,
    id: number| null
}