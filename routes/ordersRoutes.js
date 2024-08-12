const express = require('express');
const router = express.Router();

const orders = require('../controllers/ordersControllers.js');

// Routes endpoints
router.get('/', )

router.post('/', )
  
router.put('/', )
  
router.delete('/', )
  

module.exports = router;

/*
get /
get /:id
get /product/:id oppure get /:product
get /date/:id oppure get /:date
post /
put /:id
delete /:id


Le API dovranno consentire l’inserimento, la modifica e la cancellazione, 
di un ordine di vendita che avrà le seguenti caratteristiche: 
i prodotti di quell’ordine, gli utenti che fanno parte di quell’ordine.

Le API dovranno infine consentire di 
visualizzare tutti gli ordini, 
di filtrare e 
visualizzare per data di inserimento degli ordini e per i prodotti in esso contenuti.
*/