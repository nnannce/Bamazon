var mysql = require('mysql');
var Table = require('cli-table2');
var inquirer = require('inquirer');

var displayTable = require('./displayConstructor.js');

var TASKS = 6;

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '', 
    database:  'bamazon'
});

connection.connect(function (err) {
    if (err) {
        console.log('Error connecting to Db');
        throw err;
    }
});
