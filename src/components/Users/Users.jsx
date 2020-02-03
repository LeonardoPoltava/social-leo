import React from 'react';
import UsersItem from "./UsersItem/UsersItem";
import Pagination from "../common/Pagination/Pagination";

let Users = ({totalItemsCount, pageSize, onPageChanged, currentPage, users, ...props}) => {
    return <div className="users-list">
            <h1>Users</h1>
            <Pagination totalItemsCount={totalItemsCount} pageSize={pageSize} onPageChanged={onPageChanged} currentPage={currentPage} />
            {users.map(u =>
                <UsersItem
                    user={u}
                    followingInProgress={props.followingInProgress}
                    key={u.id}
                    unfollow={props.unfollow}
                    follow={props.follow}
                />
            )}
        </div>
}
export default Users;