const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log("server running on port 3000")
});

