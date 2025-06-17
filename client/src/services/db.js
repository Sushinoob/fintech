import dotenv from 'dotenv';
dotenv.config();

import mysql from 'mysql2';

const setting = {
    connectionLimit : 10, //set limit to 10 connection
    host     : process.env.DB_HOST, //get host from environment variable
    user     : process.env.DB_USER, //get user from environment variable
    password : process.env.DB_PASSWORD, //get password from environment variable
    database : process.env.DB_DATABASE, //get database from environment variable
    multipleStatements: true, //allow multiple sql statements
    dateStrings: true //return date as string instead of Date object
}

const pool = mysql.createPool(setting);

// Export using ESM syntax
export default pool;
