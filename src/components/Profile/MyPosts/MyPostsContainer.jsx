import React from 'react';
import { updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import { addPostActionCreator } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const SuperMyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default SuperMyPostsContainer;