//apres avoir installer express grace a : npm install express
//je difinie quatre variables
const express = require('express');
const app = express();
const port = 8000;


//J'installe le packet CORS, faire appel à ce package sans lui passer d’arguments permet d’autoriser tous les accès à votre ressource. Pas forcement utile a ce niveau de l'app.  npm install cors
const cors = require('cors');

//contourne un "bug/securité" des navigateurs ?
app.use(cors());

//je creer une route dont la response est un texte.
app.get('/', (req, res) => {
    
    res.send('Hello, je suis la response de la route afficher dans ton navigateur a ladresse localhost:8000 !!');
});


//je lance le serveur et ici utilise juste un log dans la console pour s'assurer que tout fonctionne bien.
app.listen(port, () => {
    
    console.log('Le serveur est operationnel sur le port ' + port);
});


//pour lancer le server il faut lancer la commande :
//node app.js
//et ouvrir la page sur : localhost:8000

//ce n'est que le debut d'un plus gros projet CRUD...

//bien sur, Ctrl+C , pour detruire la connection.
