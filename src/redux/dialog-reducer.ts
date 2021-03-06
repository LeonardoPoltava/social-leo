const ADD_MESSAGE = 'ADD-MESSAGE';
type DialogsType = {
    id: number | null
    name: string | null
    avatar: string | null
};
type MessagesType = {
    id: number | null
    message: string | null
}
let initialState = {
    messagesData: [] as Array<MessagesType>,
    dialogsData: [
        {id: 1, name: 'Julia', avatar: "https://scontent.fiev9-1.fna.fbcdn.net/v/t31.0-8/18527165_108062213108020_5142657843914753339_o.jpg?_nc_cat=102&_nc_oc=AQmBFYmlYF-hNp0nj6XaFpdS170Qy3gDU7UyUl20F_trXB-two3-rQNxfM82L5nPNLI&_nc_ht=scontent.fiev9-1.fna&oh=5eb537986c2c1eb0ff98d0eb6c811f74&oe=5E871397"},
        {id: 2, name: 'Leo', avatar: "https://scontent.fiev9-1.fna.fbcdn.net/v/t1.0-9/69204180_913385035661609_6653158427474264064_o.jpg?_nc_cat=104&_nc_oc=AQkf--n1m7G-v5Hl81hdjDnShZ7go1ACiOz13D_1vj75MVg7-E-lOPP8KTzKXzkCeek&_nc_ht=scontent.fiev9-1.fna&oh=37d65e6660e15ee9a07d860f5b2a5e4d&oe=5E4A9750"},
        {id: 3, name: 'Fatima', avatar: "https://instagram.fiev9-1.fna.fbcdn.net/vp/6cc94160aa06908d9dacedd30a76b60a/5E575759/t51.2885-15/sh0.08/e35/s750x750/67780439_2640105096013963_5656727610121398827_n.jpg?_nc_ht=instagram.fiev9-1.fna.fbcdn.net&_nc_cat=107"},
        {id: 4, name: 'Ramin', avatar: "https://instagram.fiev9-1.fna.fbcdn.net/vp/76a0f0e416adc85d8cf9aabfdec29e73/5E58536B/t51.2885-15/sh0.08/e35/p640x640/66107413_511656199584714_6838401202735629629_n.jpg?_nc_ht=instagram.fiev9-1.fna.fbcdn.net&_nc_cat=106"},
        {id: 5, name: 'Terry', avatar: "https://instagram.fiev9-1.fna.fbcdn.net/vp/2fad656281839ed604238c2959d14a97/5E5079AD/t51.2885-15/e35/13381346_689645064507947_137065777_n.jpg?_nc_ht=instagram.fiev9-1.fna.fbcdn.net&_nc_cat=111"},
        {id: 6, name: 'Gerrard', avatar: "https://instagram.fiev9-1.fna.fbcdn.net/vp/3096af97282a8d75ddcf8669e732a976/5E47EACF/t51.2885-15/sh0.08/e35/p750x750/73317997_121199169311357_8433565016245429815_n.jpg?_nc_ht=instagram.fiev9-1.fna.fbcdn.net&_nc_cat=105"}
    ] as Array<DialogsType>
};
export type InitialStateType = typeof initialState;
const dialogReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let body = action.newMessageText;
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 5, message: body}]
            }
        }
        default:
            return state;
    }
};
type AddMessageCreatorType = {
    type: typeof ADD_MESSAGE,
    newMessageText: string
}
export const addMessageCreator = (newMessageText: string): AddMessageCreatorType => ({
    type: ADD_MESSAGE, newMessageText
});

export default dialogReducer;