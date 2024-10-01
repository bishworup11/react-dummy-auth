import React, { useState,useEffect } from 'react'

export default function useFetch({url}) {
    const [users,setUsers] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=>{
        const fetchUsers = async ()=>{
            try{
                const response = await fetch(url);
              
                if(!response.ok){
                    throw Error('could not fetch data from that resource');
                }
                const data = await response.json();
                const users=data.users;
               
                setUsers(users);
                setLoading(false);
                setError(null);
            }
            catch(err){
                setLoading(false);
                setError(err.message);
            }
        }

      
        fetchUsers();

    },[url]);

  return {users,loading,error}
}
