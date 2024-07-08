const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const contactRoutes = require('./routes/contact.routes');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



mongoose.connect('mongodb+srv://gaelvanbeveren98:Unkut59210@myfirstdatabase.otymanr.mongodb.net/carnet-adresses');

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.use('/contacts', contactRoutes)

app.use((req, res) => {
    res.status(404).send('Not Found');
})

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send("erreeur interner server");
});

app.listen(3000 , () => {
    console.log('Server running on port 3000');
})
