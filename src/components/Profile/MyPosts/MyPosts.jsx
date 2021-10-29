import post from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';

const MyPosts = (props) => {

    let postElements =
        props.posts.map(post => <Post message={post.message} />);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={post.postsBlock}>
            <h5>My posts</h5>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;