import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import sidebarReducer from "./sidebar-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_TEXT = 'UPDATE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let store = {
    _state : {
        profilePage: {
            posts: [{id: 1, message: 'Hello world', likesCount: "12"},{id: 2, message: 'Wazzup', likesCount: "15"},{id: 3, message: 'Im learning reactJs', likesCount: "6"}],
            newPostText : "Type your message here.."
        },
        messagesPage: {
            messagesData: [{id: 1, message: 'Hi'},{id: 2, message: 'Hey!'}, {id: 3, message: 'How r u?'}],
            dialogsData: [
                {id: 1, name: 'Julia', avatar: "https://scontent.fiev9-1.fna.fbcdn.net/v/t31.0-8/18527165_108062213108020_5142657843914753339_o.jpg?_nc_cat=102&_nc_oc=AQmBFYmlYF-hNp0nj6XaFpdS170Qy3gDU7UyUl20F_trXB-two3-rQNxfM82L5nPNLI&_nc_ht=scontent.fiev9-1.fna&oh=5eb537986c2c1eb0ff98d0eb6c811f74&oe=5E871397"},
                {id: 2, name: 'Leo', avatar: "https://scontent.fiev9-1.fna.fbcdn.net/v/t1.0-9/69204180_913385035661609_6653158427474264064_o.jpg?_nc_cat=104&_nc_oc=AQkf--n1m7G-v5Hl81hdjDnShZ7go1ACiOz13D_1vj75MVg7-E-lOPP8KTzKXzkCeek&_nc_ht=scontent.fiev9-1.fna&oh=37d65e6660e15ee9a07d860f5b2a5e4d&oe=5E4A9750"},
                {id: 3, name: 'Fatima', avatar: "https://instagram.fiev9-1.fna.fbcdn.net/vp/6cc94160aa06908d9dacedd30a76b60a/5E575759/t51.2885-15/sh0.08/e35/s750x750/67780439_2640105096013963_5656727610121398827_n.jpg?_nc_ht=instagram.fiev9-1.fna.fbcdn.net&_nc_cat=107"},
                {id: 4, name: 'Ramin', avatar: "https://instagram.fiev9-1.fna.fbcdn.net/vp/76a0f0e416adc85d8cf9aabfdec29e73/5E58536B/t51.2885-15/sh0.08/e35/p640x640/66107413_511656199584714_6838401202735629629_n.jpg?_nc_ht=instagram.fiev9-1.fna.fbcdn.net&_nc_cat=106"},
                {id: 5, name: 'Terry', avatar: "https://instagram.fiev9-1.fna.fbcdn.net/vp/2fad656281839ed604238c2959d14a97/5E5079AD/t51.2885-15/e35/13381346_689645064507947_137065777_n.jpg?_nc_ht=instagram.fiev9-1.fna.fbcdn.net&_nc_cat=111"},
                {id: 6, name: 'Gerrard', avatar: "https://instagram.fiev9-1.fna.fbcdn.net/vp/3096af97282a8d75ddcf8669e732a976/5E47EACF/t51.2885-15/sh0.08/e35/p750x750/73317997_121199169311357_8433565016245429815_n.jpg?_nc_ht=instagram.fiev9-1.fna.fbcdn.net&_nc_cat=105"}
            ],
            newMessageText : "Type your message here.."
        },
        sidebar: {
            friends: {

            }
        }
    },
    _callSubscriber () {
        console.log('state has changed');
    },

    subscribe (observer) {
        this._callSubscriber = observer;
    },
    getState () {
        return this._state;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
};
// posts
export const addPostCreator = () => ({type: ADD_POST});
export const updateTextCreator = (text) => ({
    type: UPDATE_TEXT,
    newText: text
});
// messages
export const addMessageCreator = () => ({type: ADD_MESSAGE});
export const updateMessageCreator = (text) => ({
    type: UPDATE_MESSAGE_TEXT,
    newText: text
});
window.store = store;
export default store;