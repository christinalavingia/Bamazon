var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "65362Cnl!m",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    start();
});

function start() {
    inquirer.prompt([{
        name: "confirm",
        type: "confirm",
        message: "Welcome to Bamazon! Would you like to view our inventory?",
        default: true
    }]).then(function (answer) {
        if (answer.confirm === true) {
            inventory();
        } else {
            console.log("Thanks for stopping by!");
        }
    });

}

function inventory() {
    var table = new Table({
        head: ["ID", "Item", "Department", "Price", "Stock"],
        colWidths: [10, 40, 30, 30, 30]
    });
    displayItems();

    function displayItems() {
    connection.query("SELECT * FROM products", function (err, res) {
        for (var i = 0; i < res.length; i++) {
            var itemId = res[i].item_id,
                productName = res[i].product_name,
                departmentName = res[i].department_name,
                price = res[i].price,
                stock = res[i].stock_quantity;

            table.push(
                [itemId, productName, departmentName, price, stock]
            );
        }
        console.log("-------- Current Inventory --------")
        console.log(table.toString());
        continuePrompt();
    });

}

}

function continuePrompt() {
    inquirer.prompt([{
        name: "continue",
        type: "confirm",
        message: "Would you like to purchase an item?",
        default: true
    }]).then(function (answer) {
        if (answer.continue === true) {
            selection();
        } else {
            console.log("Thank you, come back soon!");
        }
    })
}

function selection() {
    inquirer.prompt([{
        name: "input_Id",
        type: "input",
        message: "Please enter the ID of the item you'd like to purchase.",
    }, {
        name: "units",
        type: "input",
        message: "How many units would you like to purchase?"
    }]).then(function (answer) {
        connection.query("SELECT * FROM products WHERE item_id = ?", answer.input_Id, function (err, res) {
            for (var i = 0; i < res.length; i++) {
                if (answer.units > res[i].stock_quantity) {
                    console.log("Sorry! We don't have enough in stock. Please enter a different amount or try again later.");
                    start();
                } else {
                    console.log("Your order will be fulfilled.\nYou've selected: \nItem: " + res[i].product_name + "\nDepartment: " + res[i].department_name + "\nPrice: " + res[i].price + "\nQuantity: " + answer.units + "\nTotal: $" + res[i].price * answer.units);

                    var newStock = (res[i].stock_quantity - answer.units);
                    var product = answer.input_Id;
                    confirm(newStock, product);
                }
            }
        })
    })
}

function confirm(newStock, product) {
    inquirer.prompt([{
        name: "confirmation",
        type: "confirm",
        message: "Please confirm your order.",
        default: true
    }]).then(function (answer) {
        if (answer.confirmation === true) {
            connection.query("UPDATE products SET ? WHERE ?", [{
                stock_quantity: newStock
            }, {
                item_id: product
            }], function (err, res) { });
            console.log("Your order is complete, thank you!")
            start();
        } else {
            console.log("Thanks for stopping by!");
            start();
        }
    });
}