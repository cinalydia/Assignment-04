/*eslint-env browser*/

var list = [
        [parseInt(2233, 10), "Hat", parseInt(12, 10), parseFloat(14.99)],
        [parseInt(3223, 10), "Socks", parseInt(36, 10), parseFloat(9.99)],
        [parseInt(4824, 10), "Shirt", parseInt(10, 10), parseFloat(15.99)]
        [parseInt(6343, 10), "Jeans", parseInt(22, 10), parseFloat(39.99)]
        [parseInt(9382, 10), "Jacket", parseInt(5, 10), parseFloat(49.99)]
    ];


function commandMenu() {
    "use strict";
    window.console.log("Product Inventory Management System");
    window.console.log("");
    window.console.log("View - View all products");
    window.console.log("Update - Update stock");
    window.console.log("Exit - Exit program");
    window.console.log("");
}


function view() {
    "use strict";
    list.forEach(function (item) {
        window.console.log(item[0] + " " + item[1] + " (" + item[2] + ") $" + item[3]);
    });
    window.console.log("");
}

function update() {
    "use strict";

    var select = window.prompt("Add or Update?"),
        add = function () {
            list.push([parseInt(window.prompt("Enter item sku number: xxxx"), 10), window.prompt(String("Enter item name")), Number(window.prompt(("Enter item quantity: xx"))), Number(window.prompt("Enter item price: xx.xx"))]);
            window.alert("Item has been added. Select 'View' to view updated list.");
            window.console.log("");
        },
        updateSku = function () {
            var skuNum = parseInt(window.prompt("Enter sku"), 10), i, amt;
            for (i = 0; i < list.length; i += 1) {
                if (list[i][0] === skuNum) {
                    amt = window.prompt("What is the updated amount");
                    list[i][2] = parseInt(amt, 10);
                }
            }
        };
    if (select === "Add" || select === "add") {
        add();
    } else if (select === "Update" || "update") {
        updateSku();
    } else {
        window.prompt("Please select a valid command");
        window.prompt("Add, Remove, or Update?");
    }
}

function exit() {
    "use strict";
    localStorage.list = list.join("|");
    return;
}


function main() {
    "use strict";
    commandMenu();
    var command;

/* Tried troubleshooting to see why it wouldn't work.
if (localStorage.getItem("list") !== null) {
            list = localStorage.getItem("list");
            list = list.split("|");
            list.forEach(function (item, i){
                list[i] = item.split(',');
            });
                list = localStorage.getItem("list");
            list = list.split("|");*/
    
    while (true) {
        command = window.prompt("Welcome to the product inventory management application. Please choose an option: View, Update, Exit");
        if (command !== null) {
            if (command === "View" || command === "view") {
                view();
            } else if (command === "Update" || command === "update") {
                update();
            } else if (command === "Exit" || command === "exit") {
                exit();
                break;
            } else {
                window.alert("Please enter a valid command.");
            }
        } else {
            break;
        }
    }
    window.console.log("");
    window.console.log("Program closing.");
    
}
main();
