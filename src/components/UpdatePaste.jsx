import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateToPaste } from '../features/pasteSlice'; // ✅ Only one import
import toast from 'react-hot-toast';
import './UpdatePaste.css'; 

const UpdatePaste = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const pastes = useSelector((state) => state.paste.pastes);
  const paste = pastes.find((p) => p._id === id);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (paste) {
      setTitle(paste.title);
      setContent(paste.content);
    }
  }, [paste]);

  const handleUpdate = () => {
    if (!title.trim() || !content.trim()) {
      return toast.error("Title and content can't be empty");
    }

    const updatedPaste = {
      ...paste,
      title: title.trim(),
      content: content.trim(),
    };

    dispatch(updateToPaste(updatedPaste)); // ✅ correctly dispatch updated paste
    navigate('/');
  };

  if (!paste) {
    return <p style={{ color: 'white', textAlign: 'center' }}>Paste not found.</p>;
  }

  return (
    <div className="update-container">
      <h2 className="update-heading">Update Paste</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value.slice(0, 15))}
        placeholder="Update title"
      />
      <textarea
        rows={10}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Update content"
      />
      <button onClick={handleUpdate} className="update-button">UPDATE</button>
    </div>
  );
};

export default UpdatePaste;
