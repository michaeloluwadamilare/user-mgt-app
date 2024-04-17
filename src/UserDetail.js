import { useParams, useNavigate} from "react-router-dom";
import useFetch from "./useFetch";

const UserDetail = () => {
    const { id } = useParams();
    const { data: user, error, IsPending }  = useFetch('http://localhost:3000/users/' + id)
    const navigate = useNavigate();
    const handleDelete = () => {
        fetch('http://localhost:3000/users/' + id, {
            method: 'DELETE',
        }).then(() => { console.log('User deleted'); navigate('/'); })
    }
    return (
        <>
            <div className="user-details">
                { IsPending && <div>Loading...</div>}
                { error && <div>{ error }</div> }
                { user && user.name ? (<div className="card">
                <div className="card-title">{ user.name }</div>
                <div className="card-body">
                    <p>Username: { user.username } </p>
                    <p>Email: { user.email } </p>
                    <p>Phone: { user.phone } </p>
                    <button className="btn btn-danger btn-sm" onClick={handleDelete}>Delete</button>
                
                </div>
                
                </div>
                ): 'User not found'}
            </div>
        </>
    )
}
export default UserDetail;