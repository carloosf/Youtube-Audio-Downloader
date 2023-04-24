import App from './app';
const ytdl = require('ytdl-core');

app.get('/download', async (req, res) => {
  try {

    const videoUrl = req.query.url;
    const audioFormats = ytdl.filterFormats(ytdl.chooseFormat(ytdl.getURLVideoID(videoUrl), { quality: 'highestaudio' }), 'audioonly');
    const audioStream = ytdl(videoUrl, { format: audioFormats[0] });

    res.header('Content-Disposition', `attachment; filename="${audioFormats[0].qualityLabel}.mp3"`);

    audioStream.pipe(res);

  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});
