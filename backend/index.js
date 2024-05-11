const express = require("express");
const cors = require("cors");


const app = express();

const con = require("./connection");

const book = require("./Routers/Book");


const admin = require("./Routers/admin");
const student = require("./Routers/student");
const teacher = require("./Routers/teacher")
const t_borrowed = require("./Routers/T_Borrowers")
const publisher = require("./Routers/publisher")
const stu_Borrowers = require("./Routers/stu_Borrowers")
const due = require("./Routers/due")


app.use(express.json());

app.use(cors())

con.connect((error)=>{
    if(error)
        throw error;
    console.log("Successfully connected to database");
}
);

app.use(admin);
app.use(book);
app.use(student);
app.use(teacher);
app.use(t_borrowed);
app.use(publisher);
app.use(stu_Borrowers);
app.use(due);

app.listen(5000,()=>{
    console.log(`Listening on port 5000.......`);
})
