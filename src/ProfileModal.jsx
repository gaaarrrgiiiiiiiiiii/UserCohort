import React, { useState } from 'react';
import './ProfileModal.css';

const ProfileModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('import');

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Create or Modify Profile</h2>
        <div className="tabs">
          <button 
            className={activeTab === 'create' ? 'active' : ''} 
            onClick={() => setActiveTab('create')}
          >
            Create Profile
          </button>
          <button 
            className={activeTab === 'update' ? 'active' : ''} 
            onClick={() => setActiveTab('update')}
          >
            Update Profile
          </button>
          <button 
            className={activeTab === 'import' ? 'active' : ''} 
            onClick={() => setActiveTab('import')}
          >
            Import from CSV
          </button>
        </div>
        <div className="tab-content">
          {activeTab === 'import' && (
            <div className="import-area">
              <div className="upload-box">
                <i className="upload-icon">📄</i>
                <p>Upload CSV File</p>
              </div>
            </div>
          )}
          {/* Add content for other tabs as needed */}
        </div>
        <div className="modal-actions">
          <button className="cancel-button" onClick={onClose}>Cancel</button>
          <button className="import-button">Import profiles</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;