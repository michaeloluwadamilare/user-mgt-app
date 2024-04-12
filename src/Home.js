import useFetch from './useFetch';
import User from "./User";


const Home = () => {
  
  const { data:users, error, IsPending } = useFetch('https://jsonplaceholder.typicode.com/users');

  return (
    <>
      { error && <p> {error} </p>}
      { IsPending && <p>Loading...</p>}
      { users && <User users={users} />}
    </>
  );
}

export default Home;
 