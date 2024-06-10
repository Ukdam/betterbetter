const express = require('express');
const app = express();
const PORT = 4000;

// CORS
const cors = require('cors');
app.use(cors());

// bodyParser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api', (req, res) => {
    res.json({ message: 'hello' });
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
