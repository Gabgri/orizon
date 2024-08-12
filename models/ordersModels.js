const db = require('../config/db'); // database from config/db.js

const order = {

    get : async (data) => {
        const query = '';
        try {
            const result = await db.query(query);
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    },

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

module.exports = order;