import useFetch from './useFetch';
import User from "./User";
import SearchBox from "./SearchBox";
import { useState } from 'react';


const Home = () => {
  const [searchTerm, setSearchTerm ] = useState('');
  const { data:users, error, IsPending } = useFetch('http://localhost:8000/users');
  let filteredUsers = users;
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  }
  
  if(searchTerm){
    filteredUsers = users.filter(user =>{
      return user.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
  }

  return (
    <>
      <SearchBox searchChange={handleSearch} term={searchTerm} />
      { error && <p> {error} </p>}
      { IsPending && <p>Loading...</p>}
      { filteredUsers && <User users={filteredUsers} />}
    </>
  );
}

export default Home;
 