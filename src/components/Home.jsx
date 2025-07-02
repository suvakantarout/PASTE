import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';

const Home = () => {
    const [title, setTitle] = useState("");
    const [value, setValue] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const pasteId = searchParams.get("pasteId");


    return (
        <div>
            <div>
                <input
                    type="text"
                    placeholder='Enter title here (max 20 letters)'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <button>
                    Create Paste
                </button>
            </div>
            <div>
                <textarea
                    value={value}
                    placeholder='Write your note here...'
                    onChange={(e) => setValue(e.target.value)}
                    rows={20}
                />
            </div>
        </div>
    )
}

export default Home
