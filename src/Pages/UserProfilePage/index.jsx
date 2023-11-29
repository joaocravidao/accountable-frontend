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
    <div className='user-profile-container'>
      <div>
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
        <br></br>
        <input type="file" onChange={handleImageChange} accept="image/*" />
      </div>
      <div>
        <h2>User Profile</h2>
        <p>
          <strong>First Name: </strong> {user.firstName}
        </p>
        <p>
          <strong>Last Name: </strong> {user.lastName}
        </p>
        <p>
          <strong>Email: </strong> {user.email}
        </p>
        <button onClick={handleEditProfile}>Edit Profile</button>
      </div>
    </div>
  );
};

export default UserProfilePage;
