import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) =>{
    e.preventDefault();
    const data = {name, username, email, phone};
    setIsPending(true);
    fetch('http://localhost:8000/users', {
      method: 'POST',
      headers: {"Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => { console.log(data); setIsPending(false); navigate('/'); });
  }

    return (
      <>
        <div className="container">
          <h2>Create User</h2>
          <div className="row d-flex justify-content-center">
            <div className="col-md-6">
              <form onSubmit={handleSubmit}>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Name</label>
                  <div className="col-sm-10">
                    <input type="text" onChange={(e)=> setName(e.target.value)} className="form-control" required placeholder="name" value={name} />
                  </div>
                </div>
                <div className="form-group row mt-2">
                  <label className="col-sm-2 col-form-label">Username</label>
                  <div className="col-sm-10">
                    <input type="text" onChange={(e)=> setUsername(e.target.value)}className="form-control" required placeholder="Username" value={username} />
                  </div>
                </div>
                <div className="form-group row mt-2">
                  <label className="col-sm-2 col-form-label">Email</label>
                  <div className="col-sm-10">
                    <input type="email" onChange={(e)=> setEmail(e.target.value)} className="form-control" required placeholder="Email" value={email} />
                  </div>
                </div>
                <div className="form-group row mt-2 mb-2">
                  <label className="col-sm-2 col-form-label">Phone</label>
                  <div className="col-sm-10">
                    <input type="text" onChange={(e)=> setPhone(e.target.value)}  className="form-control" required placeholder="Phone" value={phone} />
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
   