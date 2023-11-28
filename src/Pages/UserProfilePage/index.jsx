import React, { useState } from 'react';
import defaultProfileImage from '/src/assets/user-profile-image.jpg';

const UserProfilePage = () => {
  const [user, setUser] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    profileImage: null,
  });

  const handleEditProfile = () => {
    alert('Edit profile functionality coming soon!');
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setUser((prevUser) => ({
      ...prevUser,
      profileImage: file,
    }));
  };

  return (
    <div>
      <h2>User Profile</h2>
      {user.profileImage ? (
        <img
          src={URL.createObjectURL(user.profileImage)}
          alt="Profile"
          style={{ width: '100px', height: '100px', borderRadius: '50%' }}
        />
      ) : (
        <img
          src={defaultProfileImage}
          alt="Default Profile"
          style={{ width: '100px', height: '100px', borderRadius: '50%' }}
        />
      )}
      <input type="file" onChange={handleImageChange} accept="image/*" />
      <p>
        <strong>First Name:</strong> {user.firstName}
      </p>
      <p>
        <strong>Last Name:</strong> {user.lastName}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <button onClick={handleEditProfile}>Edit Profile</button>
    </div>
  );
};

export default UserProfilePage;
