/*eslint-env browser*/
//STEP 1
/*var movies = ["Independence Day", "Stargate", "District 9", "LOTR", "Atonement"];
window.console.log(movies[1]);*/


//STEP 2
/*var movies = new Array(5);
movies[0] = "The Hunger Games";
movies[1] = "Harry Potter";
movies[2] = "Inception";
movies[3] = "Interstellar";
movies[4] = "Gladiator";
window.console.log(movies[0]);*/


//STEP 3
/*var movies = new Array(5);
movies[0] = "The Hunger Games";
movies[1] = "Harry Potter";
movies[2] = "Inception";
movies[3] = "Interstellar";
movies[4] = "Gladiator";
movies[5] = "The Mummy";
window.console.log(movies.length);*/


//STEP 4
/*var movies = [1, 2, 3, 4, 5, 6];
movies[0] = "Avatar";
movies[1] = "Titanic";
movies[2] = "Casino Royale";
movies[3] = "300";
movies[4] = "Troy";
movies[5] = "Prometheus";
delete movies[0];
window.console.log(movies);*/

//STEP 5
/*var movies = [1, 2, 3, 4, 5, 6, 7], i;
movies[0] = "Pride & Prejudice";
movies[1] = "Persuasion";
movies[2] = "Sense & Sensibility";
movies[3] = "Way of the Dragon";
movies[4] = "Fists of Fury";
movies[5] = "The Big Boss";
movies[6] = "Ben Hur";
for (i = 0; i < movies.length; i += 1) {
    window.console.log(movies[i]);
}*/


//STEP 6
/*var movies = [1, 2, 3, 4, 5, 6, 7], index;
movies[0] = "Pride & Prejudice";
movies[1] = "Persuasion";
movies[2] = "Sense & Sensibility";
movies[3] = "Way of the Dragon";
movies[4] = "Fists of Fury";
movies[5] = "The Big Boss";
movies[6] = "Ben Hur";
for (index in movies) {
    window.console.log(movies[index]);
}*/


//STEP 7
/*var movies = [1, 2, 3, 4, 5, 6, 7], index;
movies[0] = "Pride & Prejudice";
movies[1] = "Persuasion";
movies[2] = "Sense & Sensibility";
movies[3] = "Way of the Dragon";
movies[4] = "Fists of Fury";
movies[5] = "The Big Boss";
movies[6] = "Ben Hur";
for (index in movies) {
    movies.sort();
    if (movies.hasOwnProperty(index)) {
        window.console.log(movies[index]);
    }
}*/


//STEP 8
/*var i, movies = [], leastFavMovies = [];
movies[0] = "Movies I like:";
movies[1] = " ";
movies[2] = "Pride & Prejudice";
movies[3] = "Persuasion";
movies[4] = "Sense & Sensibility";
movies[5] = "Way of the Dragon";
movies[6] = "Fists of Fury";
movies[7] = "The Big Boss";
movies[8] = "Ben Hur";

leastFavMovies[0] = " ";
leastFavMovies[1] = "Movies I regret watching:";
leastFavMovies[2] = " ";
leastFavMovies[3] = "Fight Club";
leastFavMovies[4] = "The Departed";
leastFavMovies[5] = "American History X";

for (i = 0; i < movies.length; i += 1) {
    window.console.log(movies[i]);
}
for (i = 0; i < leastFavMovies.length; i += 1) {
    window.console.log(leastFavMovies[i]);
}*/

// -- OR? --
/*var i, movies = [], leastFavMovies = [];
movies[0] = "Movies I like:";
movies.push(" ", "Pride & Prejudice", "Wall-E", "Sense & Sensibility", "Way of the Dragon", "Fists of Fury", "The Big Boss", "Ben Hur");

leastFavMovies[0] = " ";
leastFavMovies.push("Movies I regret watching:", " ", "Fight Club", "The Departed", "American History X");
for (i = 0; i < movies.length; i += 1) {
    window.console.log(movies[i]);
}
for (i = 0; i < leastFavMovies.length; i += 1) {
    window.console.log(leastFavMovies[i]);
}*/


//STEP 9
/*var i, movies = [];
movies[0] = "Wall-E";
movies[1] = "The Lion King";
movies[2] = "Up";
movies[3] = "Meet The Robinsons";
movies[4] = "Cloudy With A Chance of Meatballs";
movies[5] = "The Incredibles";
movies[6] = "Toy Story";
movies[7] = "Other eight";
movies[8] = "Other nine";

movies.concat("Other ten", "Other eleven", "Other twelve");
movies.reverse();
movies.sort();


for (i = 0; i < movies.length; i += 1) {
    window.console.log(movies[i]);
}*/


//STEP 10
/*var movies = [];
movies[0] = "Wall-E";
movies[1] = "The Lion King";
movies[2] = "Up";
movies[3] = "Meet The Robinsons";
movies[4] = "Cloudy With A Chance of Meatballs";
movies[5] = "The Incredibles";
movies[6] = "Toy Story";
movies[7] = "Other eight";
movies[8] = "Other nine";
movies = movies.pop();
window.console.log(movies);*/


//STEP 11
/*var movies = [];
movies[0] = "Wall-E";
movies[1] = "The Lion King";
movies[2] = "Up";
movies[3] = "Meet The Robinsons";
movies[4] = "Cloudy With A Chance of Meatballs";
movies[5] = "The Incredibles";
movies[6] = "Toy Story";
movies[7] = "Other eight";
movies[8] = "Other nine";
movies = movies.shift();
window.console.log(movies);*/


//STEP 12
/*var movies = [];
movies[0] = "Fight Club";
movies[1] = "The Departed";
movies[2] = "American History X";
movies[3] = "Tarzan";
movies.splice(0, 3, "Wall-E", "Stargate", "Harry Potter");
window.document.write(movies.join("<br>"));*/


//STEP 13
/*var employee1 = [];
employee1["is current"] = true;
employee1["id"] = 5632;
employee1["name"] = "Spongebob Squarepants";
employee1["title"] = "Chef";
employee1["department"] = "Kitchen";

var employee2 = [];
employee2["is current"] = true;
employee2["id"] = 7986;
employee2["name"] = "Squidward Tenticles";
employee2["title"] = "Art Professor";
employee2["department"] = "Art";

var employees = [employee1, employee2];
window.console.log(employees[1]["name"]);*/


//STEP 14
/*var employee1 = [];
employee1["is current"] = true;
employee1["id"] = 5632;
employee1["name"] = "Spongebob Squarepants";
employee1["title"] = "Chef";
employee1["department"] = "Kitchen";

var employee2 = [];
employee2["is current"] = true;
employee2["id"] = 7986;
employee2["name"] = "Squidward Tenticles";
employee2["title"] = "Art Professor";
employee2["department"] = "Art";

var i, employees = [employee1, employee2];
for (i in employees) {
    if (i.hasOwnProperty(i)) {
        window.console.log(employees[1]["name"]);
    }
}*/


//STEP 15
//Couldn't figure out how to display all items from loop.
/*var employee1 = [];
employee1["is current"] = true;
employee1["id"] = 5632;
employee1["name"] = "Spongebob Squarepants";
employee1["title"] = "Chef";
employee1["department"] = "Kitchen";

var employee2 = [];
employee2["is current"] = true;
employee2["id"] = 7986;
employee2["name"] = "Squidward Tenticles";
employee2["title"] = "Art Professor";
employee2["department"] = "Art";

var employee3 = [];
employee3["is current"] = false;
employee3["id"] = 2236;
employee3["name"] = "Eugene Crab";
employee3["title"] = "Restaurant Owner";
employee3["department"] = "CEO";

var i, employees = [employee1, employee2, employee3];
for (i in employees) {
    if (i.hasOwnProperty(i)) {
        if (employee3["is current"] === false) {
                window.document.write(employee3["name"] + " could not be found.<br>");
            }
        window.console.log(employees[0], employees[1]);
    }
}*/



//STEP 16
/*var movies = [["Independence Day", 1], ["Stargate", 2], ["Interstellar", 3], ["District 9", 4], ["300", 5]];

movies.forEach(function (item) {
    "use strict";
    movies.filter(function (item) {
        return typeof item === "string";
    });
    window.document.write(item[0] + "<br>");
});*/



//STEP 17
/*var employees = [];
employees[0] = "Employees:";
employees[1] = " ";
employees[2] = "ZAK";
employees[3] = "JESSICA";
employees[4] = "MARK";
employees[5] = "FRED";
employees[6] = "SALLY";

var showEmployee = function (employees) {
    "use strict";
    var i;
    for (i = 0; i < employees.length; i += 1) {
        window.console.log(employees[i]);
    }
};
showEmployee(employees);*/



//STEP 18
/*var array = [];
array[0] = 10;
array[1] = null;
array[2] = 0;
array[3] = "Random!";
array[4] = false;
array[5] = " ";
array[6] = 99;
array[7] = true;*/


//STEP 19
/*var randomArray = [];
randomArray[0] = "1";
randomArray[1] = "2";
randomArray[2] = "3";
randomArray[3] = "3";
randomArray[4] = "4";
randomArray[5] = "5";
randomArray[6] = "6";
randomArray[7] = "7";
randomArray[8] = "8";
randomArray[9] = "9";
randomArray[10] = "10";

var choice = function () {
    "use strict";
    var random = randomArray[Math.floor(Math.random() * randomArray.length)];
    return random;
};
window.console.log(Number(choice()));*/

//STEP 20
/*var num = [];
num[0] = 2;
num[1] = 45;
num[2] = 60;
var i, large = 0;

for (i = 0; i < num.length; i += 1) {
    if (num[i] > large) {
        large = num[i];
    }
}
window.console.log(large);*/

/* -- OR? --
var num = [];
num[0] = 2;
num[1] = 45;
num[2] = 60;

function bigNumber(value) {
    "use strict";
    return value > 50;
}
window.console.log(num.filter(bigNumber).toString());*/
