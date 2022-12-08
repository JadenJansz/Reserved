import express from "express"
import mysql from "mysql"
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express();

app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "reserved"
})

app.use(express.json());

app.get("/", (req,res) => {
    res.json("This is the backend")
})

app.get("/restaurants", (req, res) => {
    const sql = `SELECT* FROM restaurant`;
    
    db.query(sql, (err, data) => {
        if(err) return res.json(err)

        return res.json(data)
    })
})

app.get("/view_restaurant", (req, res) => {
    const sql = `SELECT* FROM restaurant WHERE RestaurantID = ${req.query}`;

    db.query(sql, (err, data) => {
        if(err) return res.json(err)

        return res.json(data)
    })
})


app.get("/review", (req, res) => {
    const sql = "SELECT* FROM review";

    db.query(sql, (err, data) => {
        if(err) return res.json(err)

        return res.json(data)
    })
})

app.post("/create_customer", (req, res) => {
    const sql = `Insert into customer (Email, FirstName, LastName, ContactNumber, City) values ('${req.body.email}','${req.body.firstName}', '${req.body.lastName}', '${req.body.contactNumber}', '${req.body.city}')`;
    
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.post("/create_review", (req, res) => {
    const sql = "Insert into review values (?)";

    const values = [3, 2, 2, 4.2, "Life is short", "2022-12-04 09:40:52.000000"]

    db.query(sql, [values], (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.listen(8800, () => {
    console.log("Connected to backend!")
})