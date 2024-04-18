import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {

  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();
  const { register: registerUser, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: "",
      username: "",
      phone: "",
      email: "",
    },
  });

  const onSubmit = (data) => { 
    setIsPending(true);
    fetch('http://localhost:8000/users', {
      method: 'POST',
      headers: {"Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => { setIsPending(false); navigate('/'); });
  }

    return (
      <>
        <div className="container">
          <h2>Create User</h2>
          <div className="row d-flex justify-content-center">
            <div className="col-md-6">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Name</label>
                  <div className="col-sm-10">
                    <input {...registerUser('name', {required: 'Name is required'})} className="form-control" placeholder="name" />
                    {errors.name && <p className="text-danger">{errors.name.message}</p>}

                  </div>
                </div>
                <div className="form-group row mt-2">
                  <label className="col-sm-2 col-form-label">Username</label>
                  <div className="col-sm-10">
                    <input {...registerUser('username', {required: 'Username is required'})} className="form-control" placeholder="Username" />
                    {errors.username && <p className="text-danger">{errors.username.message}</p>}

                  </div>
                </div>
                <div className="form-group row mt-2">
                  <label className="col-sm-2 col-form-label">Email</label>
                  <div className="col-sm-10">
                    <input type="email" {...registerUser('email', {required: 'Email is required'})} className="form-control" placeholder="Email" />
                    {errors.email && <p className="text-danger">{errors.email.message}</p>}

                  </div>
                </div>
                <div className="form-group row mt-2 mb-2">
                  <label className="col-sm-2 col-form-label">Phone</label>
                  <div className="col-sm-10">
                    <input type="tel" {...registerUser('phone', {required: 'Phone is required'})}  className="form-control" placeholder="Phone" />
                    {errors.phone && <p className="text-danger">{errors.phone.message}</p>}
                  </div>
                </div>
                 {isPending && <button disabled className="btn btn-primary">Adding User....</button>}
                 {!isPending && <button type="submit" className="btn btn-primary">Submit</button>}

                
              </form>
            </div>
              
          </div>
        </div>
       
      </>
    );
  }
  
  export default CreateUser;
   