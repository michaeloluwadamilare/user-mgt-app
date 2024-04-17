import useFetch from './useFetch';
import User from "./User";


const Home = () => {
  
  const { data:users, error, IsPending } = useFetch('http://localhost:3000/users');

  return (
    <>
      { error && <p> {error} </p>}
      { IsPending && <p>Loading...</p>}
      { users && <User users={users} />}
    </>
  );
}

export default Home;
 