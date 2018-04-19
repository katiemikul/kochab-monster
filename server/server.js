const express = require('express');

const app = express();
const PORT = 5000;

app.use(express.static('server/server'));
app.use(express.static('server/public'));

app.get('/monsterArray', (req, res) => {
    res.send(monsterArray);
});

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
});

const monsterArray = require('./monsterArray');