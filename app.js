const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('Requête reçue MW1 !');
    next();
});

app.use((req, res, next) => {
    res.status(201);
    next();
});

app.use((req, res, next) => {
    res.json({ message: 'Votre requête a bien été reçue MW3 !' });
    next();
});

app.use((req, res, next) => {
    console.log('Réponse envoyée avec succès MW4!');
});

module.exports = app;