import React, { useEffect } from 'react';
import useFetch from './useFetch';
import UserCard from './UserCard';

export default function Home() {
  const [limit, setLimit] = React.useState(10);
  const [search, setSearch] = React.useState('');
  const [url, setUrl] = React.useState(`https://dummyjson.com/users?limit=${limit}`);

  const { users, loading, error } = useFetch({ url });

  useEffect(() => {
    setUrl(`https://dummyjson.com/users?limit=${limit}`);
    if(search) {
      setUrl(`https://dummyjson.com/users/search?q=${search}`);
      
    }
  }, [limit,search]); 
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-6">User List</h1>
     
        <span className="text-3xl font-bold text-center m-6">Search</span>
       <input type="text" className="border-2 border-gray-300 rounded-lg p-2" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />

      <div className="m-3 mr-16 ml-16 flex  flex-row flex-wrap  justify-between gap-2">
        {loading ? (
          <h1 className="text-3xl font-bold text-center mb-6">Loading...</h1>
        ) : error ? (
          <h1 className="text-3xl font-bold text-center mb-6">{error}</h1>
        ) : (
          users &&
          users.map((user) => <UserCard key={user.id} user={user} />)
        )}
      </div>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4 w-4/5 p-12 m-5 mx-52 hover:scale-110 transition-all duration-300"
        onClick={() => setLimit(limit + 10)}
      >
        Load More
      </button>
    </div>
  );
}
