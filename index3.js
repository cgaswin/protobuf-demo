const fs = require("fs");
const bson = require("bson")

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


const dataToSerialize = { students };


const serializedData = bson.serialize(dataToSerialize);


fs.writeFileSync('data', serializedData);


const readData = fs.readFileSync('data.bin');
const deserializedData = bson.deserialize(readData);

console.log(deserializedData);
