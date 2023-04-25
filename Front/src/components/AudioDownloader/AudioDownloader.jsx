import React, { useState } from 'react';
import axios from 'axios';
import '../../styles/AudioDownloader.css'

function AudioDownloader() {
    const [url, setUrl] = useState('');

    function handleDownload() {
        try {
            axios.get(`http://localhost:3001/?url=${url}`)
            console.log(url);

        } catch (error) {
            console.error(error);
        }
        finally {
            setUrl('')
        }
    }

    return (
            <form className='formUrl'>
                <h1>YouTube Audio Downloader</h1>

                <div className='inputUrl'>
                    <input
                        type="text"
                        value={url}
                        onChange={e => setUrl(e.target.value)}
                        placeholder='Insira o link do video...'
                    />
                    <button onClick={handleDownload}>Enviar</button>
                </div>
            </form>
    );
}

export default AudioDownloader;
