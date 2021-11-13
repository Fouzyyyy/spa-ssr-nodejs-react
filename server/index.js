const express = require('express');

const app = express();

app.use(express.static('spa'));

app.listen(4000);
