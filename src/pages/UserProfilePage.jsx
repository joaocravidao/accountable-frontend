import React, { useState, useEffect } from 'react';
import defaultProfileImage from '/src/images/user-profile-image.png';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const API_URL = 'http://localhost:5005';

const UserProfilePage = () => {
  const [editMode, setEditMode] = useState(false);
  let {userId} = useParams()
  console.log(userId)



  const [user, setUser] = useState({
    name: '',
    email: '',
    image: '',
    profileImageURL: '',
  });
  
  const fetchData = () => {
    axios
      .get(`${API_URL}/auth/users/${userId}`)
      .then((response) => {
        console.log(response.data);
        setUser(response.data)
      })
      .catch((error) => console.log(error));
  };

  fetchData()

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
        profileImageURL: 'https://example.com/default-profile-image.jpg',
      };
      setUser(loggedInUser);
    }
  }, []); // Empty dependency array, runs only on mount
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
/*     setEditMode(false);
    setUser(initialUser); // Reset user data to its original state */
  };
  const handleDeleteProfile = () => {
/*     const confirmDelete = window.confirm('Are you sure you want to delete your profile?');
    if (confirmDelete) {
      // Perform delete logic here (e.g., send a request to the server to delete the user).
      // For now, let's just clear the localStorage and reset the user state.
      localStorage.removeItem('user');
      setUser({
        firstName: '',
        lastName: '',
        email: '',
        profileImageURL: '',
      });
      setEditMode(false);
    } */
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
        <img
          src={user.profileImageURL || defaultProfileImage}
          alt="Profile"
          style={{ width: '100px', height: '100px' }}
        />
      </div>
      <div>
        <h2>User Profile</h2>
        {editMode ? (
          <div>
            <label>
              <strong>First Name: </strong>
              <input
                type="text"
                name="name"
                value={user.name}
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
            <label>
              <strong>Profile Image URL: </strong>
              <input
                type="text"
                name="profileImageURL"
                value={user.profileImageURL}
                onChange={handleChange}
              />
            </label>
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
            <p>
              <strong>Profile Image URL: </strong> {user.profileImageURL}
            </p>
          </div>
        )}
        {editMode ? (
          <div>
            <button onClick={handleSaveProfile}>Save</button>
            <button onClick={handleCancelEdit}>Cancel</button>
            <button onClick={handleDeleteProfile}>Delete Profile</button>
          </div>
        ) : (
          <div>
            <button onClick={handleEditProfile}>Edit Profile</button>
            <button onClick={handleDeleteProfile}>Delete Profile</button>
          </div>
        )}
      </div>
    </div>
  );
};
export default UserProfilePage;