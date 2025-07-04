import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToPaste, removeFromPaste } from '../features/pasteSlice';
import './Home.css';

const Home = () => {
    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const pastes = useSelector((state) => state.paste.pastes);

    const createPaste = () => {
        if (!title.trim() || !value.trim()) {
            return alert('Title and content cannot be empty.');
        }

        const paste = {
            title: title.trim(),
            content: value.trim(),
            _id: Date.now().toString(36),
            createdAt: new Date().toISOString(),
        };

        dispatch(addToPaste(paste));
        setTitle('');
        setValue('');
    };

    return (
        <div className="home-container">
            {/* ========== Form Section ========== */}
            <div className="form-section">
                <div className='top-row'>
                    <input
                        type="text"
                        placeholder="Enter your title (max 15 letters)"
                        value={title}
                        onChange={(e) => setTitle(e.target.value.slice(0, 15))}
                    />

                    <button onClick={createPaste} className='top-button'>CREATE</button>
                </div>   

                <textarea
                    placeholder="Write your description here..."
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    rows={13}
                />
                <button onClick={createPaste} className="bottom-button">CREATE</button>
            </div>

            {/* ========== Paste List Section ========== */}
            <div className="paste-list">
                {pastes.length === 0 ? (
                    <p style={{ color: 'white', textAlign: 'center' }}>There are no pastes yet.Create one to get started.</p>
                ) : (
                    pastes.map((paste) => (
                        <div key={paste._id} className="paste-card">
                            <h3>{paste.title}.txt</h3>
                            <div className='paste-view-date'>
                                <p className="read-more">View</p>
                                <p className="created-date">
                                    {new Date(paste.createdAt).toLocaleDateString('en-US', {
                                        month: 'long',
                                        day: '2-digit',
                                        year: 'numeric'
                                    })}
                                    {/* {new Date(paste.createdAt).toLocaleTimeString()} */}
                                </p>
                            </div>
                            {/* <p className="read-more">View</p>
                            <p className="created-date">
                                {new Date(paste.createdAt).toLocaleDateString()} at{' '}
                                {new Date(paste.createdAt).toLocaleTimeString()}
                            </p> */}
                            <div className="actions">
                                <i className="ri-pencil-line"></i>
                                <i
                                    className="ri-delete-bin-line"
                                    onClick={() => dispatch(removeFromPaste(paste._id))}
                                ></i>
                                <i className="ri-file-copy-line"></i>
                                <i className="ri-external-link-line"></i>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Home;
