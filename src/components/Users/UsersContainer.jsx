import React from 'react';
import {connect} from 'react-redux';
import {
    followAC,
    setCurrentPageAC,
    setUsersAC,
    setUsersTotalCountAC,
    toggleIsFetchingAC,
    unfollowAC
} from '../../redux/users-reducer';
import axios from "axios";
import Users from "./Users";
import preloader from './../../assets/img/Spinner-1s-200px.svg';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`http://localhost:8080/api/users/all/${this.props.currentPage}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data)
            });
        axios.get(`http://localhost:8080/api/users/all/`)
            .then(response => {
                this.props.setTotalCount(response.data.length);
            });
        axios.get(`http://109.233.110.226/ensi-catalog-0.0.1/ensi/api/v1/counterpart/get-all`)
            .then(response => {
                this.props.setTotalCount(response.data.length);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true)
        axios.get(`http://localhost:8080/api/users/all/${pageNumber - 1}`)
            .then(response => {
                this.props.toggleIsFetching(true)
                this.props.setUsers(response.data)
            });
    }

    render() {
        debugger
        return <>

            {this.props.isFetching ?
                <div><img src={preloader}/></div> : null}
            <Users totalUserCounts={this.props.totalUserCounts}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCounts: state.usersPage.totalUserCounts,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);