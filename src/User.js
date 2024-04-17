import React from "react";
import { Link } from "react-router-dom";

const User = ({ users }) => {    
    
    const userCard = users.map((user) => {
        return (
            <div className="col-md-3 mt-3" key={ user.id }>
                <div className="card">
                    <div className="card-body">
                        <h3>{user.name}</h3>
                        <p>{user.username}</p>
                        <p>{user.email}</p>
                        <Link to={`/users/${user.id}`} className="btn btn-success btn-sm">View</Link>
                    </div>
                </div>
            </div>

        )
    });

    return(
        <>
            <div className="container">
                <div className="row"> 
                    { userCard }
                </div>
            </div>
        </>
    )
}

export default User;