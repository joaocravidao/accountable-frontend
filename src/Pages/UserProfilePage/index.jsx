import React, { useState, useEffect } from 'react';
import defaultProfileImage from '/src/assets/user-profile-image.png';

const UserProfilePage = () => {
  const [editMode, setEditMode] = useState(false);
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    profileImage: null,
  });

  const initialUser = { ...user }; // Store the initial user info for canceling edits

  useEffect(() => {
    // Try to retrieve user information from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser) {
      setUser(storedUser);
    } else {
      // If no user information is found in localStorage, simulate a user login.
      const loggedInUser = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        profileImage: null,
      };

      setUser(loggedInUser);
    }
  }, []);

  const handleEditProfile = () => {
    setEditMode(true);
  };

  const handleSaveProfile = () => {
    setEditMode(false);

    // Save user information to localStorage
    localStorage.setItem('user', JSON.stringify(user));

    // Perform save/update logic here (e.g., send updated user data to the server).
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setUser(initialUser); // Reset user data to its original state
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setUser((prevUser) => ({
      ...prevUser,
      profileImage: file,
    }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
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
        {editMode ? (
          <input type="file" onChange={handleImageChange} accept="image/*" />
        ) : null}
      </div>
      <div>
        <h2>User Profile</h2>
        {editMode ? (
          <div>
            <label>
              <strong>First Name: </strong>
              <input
                type="text"
                name="firstName"
                value={user.firstName}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              <strong>Last Name: </strong>
              <input
                type="text"
                name="lastName"
                value={user.lastName}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              <strong>Email: </strong>
              <input
                type="text"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </label>
            <br />
          </div>
        ) : (
          <div>
            <p>
              <strong>First Name: </strong> {user.firstName}
            </p>
            <p>
              <strong>Last Name: </strong> {user.lastName}
            </p>
            <p>
              <strong>Email: </strong> {user.email}
            </p>
          </div>
        )}
        {editMode ? (
          <div>
            <button onClick={handleSaveProfile}>Save</button>
            <button onClick={handleCancelEdit}>Cancel</button>
          </div>
        ) : (
          <button onClick={handleEditProfile}>Edit Profile</button>
        )}
      </div>
    </div>
  );
};

export default UserProfilePage;