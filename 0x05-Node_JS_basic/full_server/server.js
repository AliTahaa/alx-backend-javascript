const express = require('express');

const router = require('./routes/index');

const app = express();
const p = 1245;

app.use('/', router);
app.use('/students', router);
app.use('/students/:major', router);

app.listen(p);

export default app;
