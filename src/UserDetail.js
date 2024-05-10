import { useParams, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import useFetch from "./useFetch";

const UserDetail = () => {
    const { id } = useParams();
    const { data: user, error, IsPending }  = useFetch('http://localhost:8000/users/' + id)
    const navigate = useNavigate();
    const MySwal = withReactContent(Swal);

    const handleDelete = () => {
        MySwal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this user record!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true,
        }).then((result) => {
            if (result.isConfirmed) {
              MySwal.fire(
                'Deleted!',
                'User has been deleted.',
                'success'
              );

              fetch('http://localhost:8000/users/' + id, {
                method: 'DELETE',
                }).then(() => { navigate('/'); })

            } else if (result.dismiss === Swal.DismissReason.cancel) {
              MySwal.fire(
                'Cancelled',
                'User data is safe',
                'error'
              );
            }
        });

    }
    return (
        <>
            <div className="container">
                { IsPending && <div>Loading...</div>}
                { error && <div>{ error }</div> }
                { user && user.name ? (
                    <div className="row mt-3 justify-content-center">
                        <div className="col-4">
                            <div className="card">
                                {/* <img src="img.jpg" alt={ user.name } style={{width:"100%"}} /> */}
                                <h1>{ user.name }</h1>
                                <div className="card-title">{ user.username }</div>
                                <div className="card-body">
                                    <p>{ user.email } </p>
                                    <p>{ user.phone } </p>
                                    
                                    <button className="btn btn-danger btn-sm me-1" onClick={handleDelete}><i className="bi bi-trash"></i></button>
                                    <button className="btn btn-primary btn-sm"><i className="bi bi-pen"></i></button>
                                </div>
                        
                            </div>
                        </div>
                    </div>

                ): 'User not found'}
            </div>
        </>
    )
}
export default UserDetail;