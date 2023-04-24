const express = require('express');
const cors = require('cors');
const fs = require('fs')
const ytdl = require('ytdl-core');
const app = express();
const port = 3001;

app.use(cors());

app.get('/', async (req, res) => {
  try {
    const videoUrl = req.query.url;

    const videoInfo = await ytdl.getInfo(videoUrl);
    const videoTitle = videoInfo.videoDetails.title;

    res.send(`Downloading ${videoTitle}`);
    const destPath = `./musics/${videoTitle}.mp3`;

    ytdl(videoUrl, { filter: 'audioonly' })
      .pipe(fs.createWriteStream(destPath))
      .on('finish', () => console.log(`${videoTitle} saved!`));

    res.send(`Downloading ${videoTitle}`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`API is listening on port ${port}`);
});
