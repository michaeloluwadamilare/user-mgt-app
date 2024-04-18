import { useParams, useNavigate} from "react-router-dom";
import useFetch from "./useFetch";

const UserDetail = () => {
    const { id } = useParams();
    const { data: user, error, IsPending }  = useFetch('http://localhost:8000/users/' + id)
    const navigate = useNavigate();
    const handleDelete = () => {
        fetch('http://localhost:8000/users/' + id, {
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
                    
                    <button className="btn btn-danger btn-sm me-1" onClick={handleDelete}><i className="bi bi-trash"></i></button>
                    <button className="btn btn-primary btn-sm"><i className="bi bi-pen"></i></button>

                
                </div>
                
                </div>
                ): 'User not found'}
            </div>
        </>
    )
}
export default UserDetail;