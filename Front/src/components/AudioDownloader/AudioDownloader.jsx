import React, { useState } from 'react';
import axios from 'axios';

function AudioDownloader() {
    const [url, setUrl] = useState('');

    function handleDownload() {
        try {
            axios.get(`http://localhost:3001/?url=${url}`)
            console.log(url);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <h1>YouTube Audio Downloader</h1>
            <input id="url-input" type="text" value={url} onChange={e => setUrl(e.target.value)} />
            <button onClick={handleDownload}>Enviar</button>
        </div>
    );
}

export default AudioDownloader;
