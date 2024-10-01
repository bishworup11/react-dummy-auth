import React, { useState,useEffect } from 'react';

const Profile = ({ token}) => {

    const [userData, setUserData] = useState(null);
    const url = 'https://dummyjson.com/user/me'; 

      console.log(token);
   useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url, {
        method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`, // Passing the token in the Authorization header
          },

        });

        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }

        const data = await response.json();
        console.log(data);
        setUserData(data); // Set the fetched user data to state
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    
      fetchData(); 
    
  }, [token]);

  // Show loading message while fetching data
  if (!userData) {
    return <div>Loading...</div>;
  }
    

  return (
    <div className="container mx-auto p-8">
    <div className="bg-white shadow-xl rounded-lg overflow-hidden">
      <div className="bg-blue-600 p-4">
        <div className="flex items-center">
          <img
            src={userData.image}
            alt={`${userData.firstName} ${userData.lastName}`}
            className="w-24 h-24 rounded-full border-4 border-white mr-4"
          />
          <div>
            <h1 className="text-2xl font-bold text-white">{userData.firstName} {userData.lastName}</h1>
            <p className="text-blue-200">{userData.email}</p>
            <p className="text-blue-200">{userData.phone}</p>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
        <div className="grid grid-cols-2 gap-4">
          <InfoItem label="Age" value={userData.age} />
          <InfoItem label="Gender" value={userData.gender} />
          <InfoItem label="Birth Date" value={userData.birthDate} />
          <InfoItem label="Blood Group" value={userData.bloodGroup} />
          <InfoItem label="Height" value={`${userData.height} cm`} />
          <InfoItem label="Weight" value={`${userData.weight} kg`} />
          <InfoItem label="Eye Color" value={userData.eyeColor} />
          <InfoItem label="Hair Color" value={userData.hair.color} />
          <InfoItem label="Hair Type" value={userData.hair.type} />
        </div>

        <h2 className="text-xl font-semibold mt-6 mb-4">Address</h2>
        <div className="grid grid-cols-2 gap-4">
          <InfoItem label="Street" value={userData.address.address} />
          <InfoItem label="City" value={userData.address.city} />
          <InfoItem label="State" value={userData.address.state} />
          <InfoItem label="Country" value={userData.address.country} />
          <InfoItem label="Postal Code" value={userData.address.postalCode} />
        </div>

        <h2 className="text-xl font-semibold mt-6 mb-4">Company Information</h2>
        <div className="grid grid-cols-2 gap-4">
          <InfoItem label="Company" value={userData.company.name} />
          <InfoItem label="Department" value={userData.company.department} />
          <InfoItem label="Title" value={userData.company.title} />
        </div>

        <h2 className="text-xl font-semibold mt-6 mb-4">Bank Information</h2>
        <div className="grid grid-cols-2 gap-4">
          <InfoItem label="Card Type" value={userData.bank.cardType} />
          <InfoItem label="Card Number" value={userData.bank.cardNumber} />
          <InfoItem label="Expiration" value={userData.bank.cardExpire} />
          <InfoItem label="Currency" value={userData.bank.currency} />
          <InfoItem label="IBAN" value={userData.bank.iban} />
        </div>

        <h2 className="text-xl font-semibold mt-6 mb-4">Other Information</h2>
        <div className="grid grid-cols-2 gap-4">
          <InfoItem label="Username" value={userData.username} />
          <InfoItem label="EIN" value={userData.ein} />
          <InfoItem label="SSN" value={userData.ssn} />
          <InfoItem label="IP Address" value={userData.ip} />
          <InfoItem label="MAC Address" value={userData.macAddress} />
          <InfoItem label="University" value={userData.university} />
        </div>
      </div>
    </div>
  </div>
  );
};

export default Profile;


const InfoItem = ({ label, value }) => (
    <div>
      <span className="font-semibold">{label}:</span> {value}
    </div>
  );