const express = require('express');
const hm = require('./routes/HTMLroutes')

const PORT = process.env.PORT || 3001;

const app = express(); 

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.use('/', hm)

app.listen(PORT, () => console.log(`server running`));