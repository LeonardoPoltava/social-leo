import React from 'react';
import "./Dialogs.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from 'redux-form'
import {Textarea} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";

const Dialogs = (props) => {
    let state = props.messagesPage;
    // dialogs
    let dialogsElement = state.dialogsData
        .map( d => {
            return <DialogItem avatar={d.avatar} id={d.id} name={d.name} key={d.id} />
        });
    // messages
    let messagesElement = state.messagesData.map( m => {
        return <Message id={m.id} message={m.message} key={m.id} />
    });
    const onSubmit = (values) => {
        props.addMessage(values.messageArea);
    };
    return (
        <div className="dialogs">
            <h1>Dialogs</h1>
            <div className="dialogs-content">
                <div className="dialogs-list">
                    {dialogsElement}
                </div>
                <div className="messages">
                    {messagesElement}
                    <AddMessageReduxForm onSubmit={onSubmit} />
                </div>
            </div>
        </div>
    );
};
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className="message-form">
            <Field component={Textarea} placeholder={"Text here.."} name="messageArea" id="message-area" cols="30" rows="10" validate={[required]}></Field>
            <button>Add message</button>
        </form>
    )
}
const AddMessageReduxForm = reduxForm({
    form: 'dialogAddMessageForm'
})(AddMessageForm);
export default Dialogs;