const fs = require("fs");


const students = []

const aswin = {
    name:"Aswin",
    course:"CSE",
    id:1
}

const jasrin = {
    name:"Jasrin",
    course:"CSE",
    id:2
}

students.push(aswin,jasrin)
console.log(JSON.stringify(students));

fs.writeFileSync("data.json",JSON.stringify(students));

