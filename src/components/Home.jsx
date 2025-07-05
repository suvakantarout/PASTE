import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToPaste, removeFromPaste } from '../features/pasteSlice';
import './Home.css';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';


const Home = () => {
    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const pastes = useSelector((state) => state.paste.pastes);


    // Create paste Function
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


    // Function for share any paste
    const handleShare = (paste) => {
        const link = `https://paste-mu.vercel.app/${paste._id}`;
        const shareText = `📄 ${paste.title}\n\n${paste.content}\n\n🔗 ${link}`;

        if (navigator.share) {
            navigator
                .share({
                    title: paste.title,
                    text: shareText,
                    url: link,
                })
                .then(() => console.log("Shared successfully"))
                .catch((err) => console.error("Error sharing:", err));
        } else {
            const whatsappLink = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
            window.open(whatsappLink, "_blank");
        }
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
                                <Link to={`/${paste._id}`} className="read-more">View</Link>

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
                                <Link to={`/${paste._id}/update`}>
                                    <i className="ri-pencil-line"></i>
                                </Link>
                                <i
                                    className="ri-delete-bin-line"
                                    onClick={() => dispatch(removeFromPaste(paste._id))}
                                ></i>
                                <i
                                    className="ri-file-copy-line"
                                    onClick={() => {
                                        navigator.clipboard.writeText(paste.content);
                                        toast.success("Copied");
                                    }}
                                ></i>
                                <i
                                    className="ri-external-link-line"
                                    onClick={() => handleShare(paste)}
                                ></i>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Home;
