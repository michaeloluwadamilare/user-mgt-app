import React from "react";
import { Link } from "react-router-dom";

const User = ({ users }) => {    
    
    const userCard = users.map((user) => {
        return (
            <div className="card mt-2" key={ user.id }>
                <div className="card-body">
                    <h3>{user.name}</h3>
                    <p>{user.username}</p>
                    <p>{user.email}</p>
                    <Link to={`/users/${user.id}`} className="btn btn-success btn-sm">View</Link>
                </div>
            </div>

        )
    });

    return(
        <>
            { userCard }
        </>
    )
}

export default User;