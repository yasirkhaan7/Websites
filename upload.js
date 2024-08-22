const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.array('files'), (req, res) => {
    const files = req.files;
    if (!files) {
        return res.status(400).send('No files were uploaded.');
    }

    res.send('Files uploaded successfully!');
});

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
