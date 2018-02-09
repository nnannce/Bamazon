var mysql = require('mysql');
var Table = require('cli-table2');
var inquirer = require('inquirer');

var displayTable = require('./displayConstructor.js');

var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: '', 
	database:  'bamazon'
});

connection.connect(function (err) {
	if (err) {
		console.log('Error connectig to database');
		throw err;
	}
});


// DISPLAY TABLE & ITEM AND QTY TO PURCHASE?
var displayForUser = function() {
	var display = new displayTable();
	connection.query('SELECT * FROM products', function(err, results){
		display.displayInventoryTable(results);
		purchaseItem();
	});
}

// PROMPT 
var purchaseItem = function() {
	console.log('\n  ');
	inquirer.prompt([{
		name: "id",
		type: "input",
		message: " Enter the Item ID of the product you want to purchase",

	}, {
		name: "quantity",
		type: "input",
		message: " Enter the quantity you want to purchase",

	}]).then(function(answer) {

		connection.query('SELECT ProductName, DepartmentName, Price, StockQuantity FROM products WHERE ?', {ItemID: answer.id}, function(err,res) {
			
		console.log('\n  You would like to buy ' + answer.quantity + ' ' + res[0].ProductName + ' ' + res[0].DepartmentName + ' at $' + res[0].Price + ' each'
			);
			if (res[0].StockQuantity >= answer.quantity) {
				//PROCESS ORDER
				var itemQuantity = res[0].StockQuantity - answer.quantity;
				connection.query("UPDATE products SET ? WHERE ?", [
				{
					StockQuantity: itemQuantity
				}, {
					ItemID: answer.id
				}], function(err,res) {
					});	
				var cost = res[0].Price * answer.quantity;
				console.log('\n  Order fulfilled! Your cost is $' + cost.toFixed(2) + '\n');
				// ORDER COMPLETED
				customerPrompt();
					
			} else {
				//DENY ORDER
				console.log('\n  Sorry, Insufficient quantity to fulfill your order!\n');

				customerPrompt();
			}
		})
    });
}

var customerPrompt = function() {
    inquirer.prompt({
        name: "action",
        type: "list",

        message: " Would like to continue shopping?\n",
        choices: ["Yes", "No"]
    }).then(function(answer) {
        switch(answer.action) {
            case 'Yes':
                displayForUser();
            break;

            case 'No':
                connection.end();
            break;
        }
    })
};

// APP STARTER
customerPrompt();
