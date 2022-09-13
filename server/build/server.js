import express from 'express';
const app = express();
app.get('/ads', (req, res) => {
    return res.json([
        { id: 1, name: 'Anuncio 1' },
        { id: 2, name: 'Anuncio 1' },
        { id: 3, name: 'Anuncio 1' },
        { id: 4, name: 'Anuncio 1' },
    ]);
});
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
