const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000 ;

app.use(express.static('public'));

app.get('/admin', (req, res) => {
    res.redirect("https://facturejardingreg.herokuapp.com")
});

app.get('/facture', (req, res) => {
    res.redirect("https://facturejardingreg.herokuapp.com/facture")
});

app.get('/devis', (req, res) => {
    res.redirect("https://facturejardingreg.herokuapp.com/devis")
});

app.listen(PORT, () => console.log(`Serveur démarré sur le port: ${PORT}`));