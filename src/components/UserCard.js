import React from 'react';

const UserCard = ({ user }) => {
  //  console.log(user);
    return (
        <div className=" w-full md:w-2/5 lg:w-1/4 rounded overflow-hidden shadow-lg bg-gray-100 p-5 m-3 hover:scale-110 duration-100">
            <img className="w-24 h-24 rounded-full mx-auto" src={user.image} alt={user.firstName} />
            <div className="text-center mt-3">
                <h2 className="text-xl font-semibold text-gray-800">{user.firstName} {user.lastName}</h2>
                <p className="text-gray-500 text-sm">{user.email}</p>
            </div>

            <div className="mt-4">
                <p><strong>Age:</strong> {user.age}</p>
                <p><strong>Company:</strong> {user.company.name}</p>
                <p><strong>Role:</strong> {user.role}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
            </div>
        </div>
    );
}

export default UserCard;
