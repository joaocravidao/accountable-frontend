import React, { useState, useEffect } from 'react';
import defaultProfileImage from '/src/images/user-profile-image.png';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const API_URL = 'https://accountable-me2.adaptable.app';

const UserProfilePage = () => {
  const { userId } = useParams();
  const [user, setUser] = useState({
    name: '',
    email: '',
    image: '',
    profileImageURL: '',
  });
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);


  //load user data when site opens
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${API_URL}/auth/users/${userId}`);
        setUser(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId]);


  //switch to edit mode
  const handleEditProfile = () => {
    setEditMode(true);
  };

  //save Edits
  const handleSaveProfile = async () => {
    try {
      await axios.put(`${API_URL}/auth/users/${userId}`, user);
      setEditMode(false);
    } catch (error) {
      console.log(error);
    }
  };

  //switch back from edit mode
  const handleCancelEdit = () => {
    setEditMode(false);
  };


  //Delete Profile
  const handleDeleteProfile = async () => {
    const confirmDelete = window.confirm('Are you sure you want to delete your profile?');
    if (confirmDelete) {
      try {
        await axios.delete(`${API_URL}/auth/users/${userId}`);
        // Handle logout or redirect to another page after deletion
      } catch (error) {
        console.log(error);
      }
    }
  };

  //handle edit input
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <div className='user-profile-page'>
      <div className='user-profile-title'>
        <p>User Profile</p>
      </div>
      <div className='user-profile-container'>
        <div className='image-container'>
          <img
            src={user.image || defaultProfileImage}
            alt="Profile"
            style={{ width: '200px', height: '200px', borderRadius: '100px' }}
          />
        </div>
        <div className='user-details-container'>
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
                  name="image"
                  value={user.image}
                  onChange={handleChange}
                />
              </label>
            </div>
          ) : (
            <div>
              <p>
                <strong>First Name: </strong> {user.name}
              </p>
              <p>
                <strong>Email: </strong> {user.email}
              </p>
              <p>
                <strong>Profile Image URL: </strong> {user.image}
              </p>
              <p>
                <strong>Created at:</strong>{' '}
                {user.createdAt ? user.createdAt.split('T')[0] : ''}
              </p>
            </div>
          )}
        </div>
      </div>
      {editMode ? (
        <div className='buttons'>
          <button className='button' onClick={handleSaveProfile}>Save</button>
          <button className='button' onClick={handleCancelEdit}>Cancel</button>
          <button className='button' onClick={handleDeleteProfile}>Delete Profile</button>
        </div>
      ) : (
        <div className='buttons'>
          <button className='button' onClick={handleEditProfile}>Edit Profile</button>
          <button className='button' onClick={handleDeleteProfile}>Delete Profile</button>
        </div>
      )}
    </div>
  );
};

export default UserProfilePage;