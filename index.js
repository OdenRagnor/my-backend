const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('API is running');
});

app.listen(PORT, () => {
    console.log("server running on port 3000")
});

