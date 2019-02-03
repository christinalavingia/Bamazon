var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "65362Cnl!m",
    database = "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    start();
});

function start() {
    inquirer.prompt([{
        name: "confirm",
        type: "confirm",
        message: "Welcome to Bamazon! Would you like to view our inventory?",
        default: true
}]).then(function(user) {
    if (user.confirm === true) {
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

    listItems();

function listItems();
    connection.query("SELECT * FROM products", function(err, res) {
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

});


}

