const express = require('express');
const app = express();

// Routes
const users = require('./routes/usersRoutes');
const orders = require('./routes/ordersRoutes');
const products = require('./routes/productsRoutes');

app.use(express.json());

app.use('/users', users);
app.use('/orders', orders);
app.use('/products', products);

app.listen(8080, () => {
    console.log("Express App running at http://127.0.0.1:8080/");
 })

/*
Le API devono tutte rispettare l’architettura REST, 
in particolare il naming, 
i metodi e gli status code di risposta

Le API dovranno consentire l’inserimento, la modifica e la cancellazione 
di un prodotto venduto che ha una caratteristica: il nome.

Le API dovranno consentire l’inserimento, la modifica e la cancellazione 
di un’anagrafica di un utente con le seguenti caratteristiche: 
nome, cognome, email.

Le API dovranno consentire l’inserimento, la modifica e la cancellazione, 
di un ordine di vendita che avrà le seguenti caratteristiche: 
i prodotti di quell’ordine, gli utenti che fanno parte di quell’ordine.

Le API dovranno infine consentire di 
visualizzare tutti gli ordini, 
di filtrare e 
visualizzare per data di inserimento degli ordini e per i prodotti in esso contenuti.

Puoi usare MySQL o MongoDB per archiviare le tue informazioni. Se scegli di utilizzare MySQL ricorda di includere un file migrations.sql per ricostruire la struttura del tuo database.
Se utilizzi MySQL ricordati che tutte le query fatte al database dovranno essere sanitizzate e non dovranno essere vulnerabili ad attacchi di tipo SQL Injection. È richiesto pertanto l’utilizzo dei prepared statement per prevenire questa tipologia di attacchi.
Ricordati che anche MongoDB può subire attacchi di tipo NoSQL Injection, qui degli esempi di OWASP, prendi le opportune precauzioni. 
 */