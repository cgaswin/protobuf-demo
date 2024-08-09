const Schema = require("./Student_pb");
const fs = require("fs")


const aswin = new Schema.Student();
aswin.setName("Aswin");
aswin.setCourse("CSE");
aswin.setId(1);

const jasrin = new Schema.Student();
jasrin.setName("Jasrin");
jasrin.setCourse("CSE");
jasrin.setId(2);



const students = new Schema.Students();
students.addStudents(aswin)
students.addStudents(jasrin)

const bytes = students.serializeBinary();
console.log("binary " + bytes)
fs.writeFileSync("studentsBinary", bytes)


// const students2 = Schema.Students.deserializeBinary(bytes);

// console.log(students2.toString())