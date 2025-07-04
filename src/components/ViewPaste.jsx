import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './ViewPaste.css'; // Optional: styling for this page

const ViewPaste = () => {
  const { id } = useParams();
  const pastes = useSelector((state) => state.paste.pastes);
  const paste = pastes.find(p => p._id === id);

  if (!paste) {
    return <p style={{ color: 'white', textAlign: 'center' }}>Paste not found.</p>;
  }

  return (
    <div className="view-paste-container">
      <h2 className="view-title">{paste.title}.txt</h2>
      <p className="view-date">
        {new Date(paste.createdAt).toLocaleDateString('en-US', {
          month: 'long',
          day: '2-digit',
          year: 'numeric'
        })}
      </p>
      <div className="view-content">
        <pre>{paste.content}</pre>
      </div>
    </div>
  );
};

export default ViewPaste;
