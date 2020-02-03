import React from 'react';
import "./MyPosts.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const MyPosts = React.memo(props => {
    let postsElement =
        props.posts.map(p => <Post id={p.id} key={p.id} message={p.message} likeCounter={p.likesCount}/>);

    let onSubmit = (values) => {
        props.addPost(values.postArea);
    };
    return (
        <div className="posts">
            <h2>My posts</h2>
            <AddPostReduxForm onSubmit={onSubmit}/>
            {postsElement}
        </div>
    );
});

const postForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className="posts-form">
            <Field
                component={Textarea}
                placeholder={"Type your message here.."}
                name="postArea"
                id="post-area"
                cols="30"
                rows="10"
                validate={[required, maxLength10]}
            >
            </Field>
            <button>Add post</button>
        </form>
    )
};
const AddPostReduxForm = reduxForm({
    form: 'postsAddMessageForm'
})(postForm);
export default MyPosts;