import React, { useState } from 'react';
import './UserTable.css';
import ProfileModal from './ProfileModal';

const UserTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const users = [
    { name: 'Ashok', email: 'undefined', updatedAt: 'less than a minute ago', countryCode: 'India', region: 'Telangana', city: 'Hyderabad', phone: 'undefined', phoneSet: '(not set)', phoneNumber: '8655688367' },
    { name: 'Ketan S', email: 'undefined', updatedAt: 'less than a minute ago', countryCode: 'India', region: 'Maharashtra', city: 'Mumbai', phone: 'undefined', phoneSet: '(not set)', phoneNumber: '9766245444' },
  ];

  return (
    <div className="user-table-container">
      <h1>Users</h1>
      <div className="user-count">1,356,897 Users with Profiles</div>
      <div className="table-actions">
        <button className="icon-button">Hide Filter</button>
        <button className="icon-button">Edit Columns • 11</button>
        <button className="icon-button">Export</button>
        <button className="icon-button" onClick={() => setIsModalOpen(true)}>Add/Edit Profile</button>
        <input type="search" placeholder="Search profiles" className="search-input" />
      </div>
      <div className="filter-section">
        <h2>ALL USERS</h2>
        <button className="filter-button">+ Filter</button>
      </div>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Updated at</th>
            <th>Country Code</th>
            <th>Region</th>
            <th>City</th>
            <th>phone</th>
            <th>Phone</th>
            <th>phone_number</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>
                <div className="user-avatar">{user.name[0]}</div>
                {user.name}
              </td>
              <td>{user.email}</td>
              <td>{user.updatedAt}</td>
              <td>{user.countryCode}</td>
              <td>{user.region}</td>
              <td>{user.city}</td>
              <td>{user.phone}</td>
              <td>{user.phoneSet}</td>
              <td>{user.phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="table-footer">
        <button className="clear-button">Clear all</button>
        <button className="save-button">Save as</button>
      </div>
      <ProfileModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default UserTable;