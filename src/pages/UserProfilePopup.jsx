import React, { useState, useEffect, useContext } from 'react';
import defaultProfileImage from '/src/images/user-profile-image.png';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../Context/auth.context';

const API_URL = 'https://accountable-me2.adaptable.app/';

const UserProfilePopup = ({closePopup}) => {
    const [editMode, setEditMode] = useState(false);
    const { logOut } = useContext(AuthContext);
    let navigate = useNavigate()
    let {userId} = useParams()

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

  const initialUser = { ...user }; // Store the initial user info for canceling edits
  useEffect(() => {
    // Try to retrieve user information from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
      fetchData()
    } else {
      // If no user information is found in localStorage, simulate a user login.
      const loggedInUser = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        image: 'https://example.com/default-profile-image.jpg',
      };
      setUser(loggedInUser);
      fetchData()

    }
  }, []); // Empty dependency array, runs only on mount

  const handleEditProfile = () => {
    setEditMode(true);
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    setEditMode(false);
  
    axios.put(`${API_URL}/auth/users/${userId}`, user)
      .then(() => {
        fetchData();
      })
      .catch((error) => console.log(error));
  };

  const handleCancelEdit = () => {
    setEditMode(false);
      setUser(initialUser); 
      fetchData()
    };
    const handleDeleteProfile = () => {
    const confirmDelete = window.confirm('Are you sure you want to delete your profile?');
      if (confirmDelete) {
        axios.delete(`${API_URL}/auth/users/${userId}`)
        .then(()=>{
          logOut()
          navigate("/")
        })
        .catch((error) => console.log(error))
        setEditMode(false);
      } 
    };
    const handleChange = (event) => {
      const { name, value } = event.target;
      setUser((prevUser) => ({
        ...prevUser,
        [name]: value,
      }));
    };

  return (
    <div className='user-profile-popup'>
        <button onClick={closePopup}>Close</button>
      <div className='user-profile-title'>
        <p>User Profile</p>
      </div>
      <div>
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

        {/* Buttons outside the user details container */}
        <div>
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
      </div>
    </div>
  );
};

export default UserProfilePopup;