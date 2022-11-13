//3.1

const greet = () => {
    console.log("Hello world!");
};

greet();

const sum = (a, b, c) => {
    return a + b + c;
};

console.log(sum(1, 4, 10));

// 3.2

const names = ["Lily", "Aurelius", "Peter"];

function longestName(names) {
    var longestWord = names.sort(function(a, b) { return b.length - a.length; });
    return longestWord[0].length;
 }
 
console.log(longestName(names))

// 3.3

let x = Math.random();

if(x < 0.5) {
    console.log("Good morning!");
}
else {
    console.log("Good evening!");
}

// 3.4

const randomNumber = (min, max) => {
    let x = Math.floor(Math.random() * (max - min + 1)) + min;
    x % 2 == 0 ? console.log("Even number") : console.log("Odd number");
    return x;
};

console.log(randomNumber(1, 1000));

// 3.5


// 3.6

const southamericans = ["Pele", "Maradona", "Messi"];
const europeans = ["Baggio", "Zidane", "Litmanen"];

const footballers = [... southamericans, ...europeans];
console.log(footballers);

// 3.7

// 3.8

const person1 = {
    name: "Vilja",
    lastName: "Pelto",
};

const person2 = {
    name: "Miina",
    lastName: "Harava",
};
 
const people = [];
people.push(person1, person2);

people.map((person) => console.log("Good evening, " + person.name + "!"));

// 3.9

const names2 = ["Vivian", "Jaakko", "Maija"];

const people2 = names2.map((name) => {
    return {
        name: name,
        age: 20,
        lastname: "Peltonen"
};
});

console.log(people2[0]);
console.log(people2[1]);
console.log(people2[2]);