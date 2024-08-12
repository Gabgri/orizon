const db = require('../config/db'); // database from config/db.js

const user = {

    create : async (data) => {
        const query = '';
        try {
            const result = await db.query(query);
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    },
    
    update : async (data) => {
        const query = '';
        try {
            const result = await db.query(query);
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    },
    
    delete : async (data) => {
        const query = '';
        try {
            const result = await db.query(query);
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }
};

module.exports = user;
// db.query()
// Le API dovranno consentire l’inserimento, la modifica e la cancellazione 
// di un’anagrafica di un utente con le seguenti caratteristiche: 
// nome, cognome, email.