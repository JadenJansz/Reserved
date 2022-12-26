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

app.get("/search_restaurants_time", (req, res) => {
    const sql = `SELECT restaurant.RestaurantID
    FROM restaurant
    WHERE restaurant.RestaurantID NOT IN (SELECT reservation.RestaurantID FROM reservation WHERE Date = '${req.query.date}' AND Time = '${req.query.time}')`;
    
    db.query(sql, (err, data) => {
        if(err) return res.json(err)

        return res.json(data)
    })
})

app.get("/restaurants", (req, res) => {
    
    let arr =[]
    Object.keys(req.query).forEach(key => {
        arr.push(req.query[key])
    })

    const sql = `SELECT* FROM restaurant WHERE RestaurantID IN (${arr.toString()}) `;
    db.query(sql, (err, data) => {
        if(err) return res.json(err)

        return res.json(data)
    })
})

app.get("/owner_view_restaurant", (req, res) => {
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

app.get("/admin_login", (req, res) => {
    const sql = `SELECT email FROM user WHERE email = '${req.query.email}' AND password = '${req.query.password}' ` ;
    db.query(sql, (err, data) => {
        if(err) return res.json(err)
        
        if(data.length > 0){
            const getRetaurantId = `SELECT RestaurantID from restaurant WHERE RestaurantAdminID = (SELECT RestaurantAdminID FROM restaurant_admin WHERE Email = '${data[0].email}')`

            db.query(getRetaurantId, (err,data) => {
                if(err) return res.json(err)

                return res.json(data)
            })
        }

        // return res.json(data)
    })
})

app.post("/create_customer", (req, res) => {
    const sql = `Insert into customer (Email, FirstName, LastName, ContactNumber, City) values ('${req.body.email}','${req.body.firstName}', '${req.body.lastName}', '${req.body.contactNumber}', '${req.body.city}')`;
    
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.post("/add_restaurant_details", (req, res) => {
    console.log(req.body)
    const sql = `Insert into restaurant (Name, AddressLine1, AddressLine2, AddressLine3, ContactNumber, Cuisine, OpenTime, CloseTime, ParkingDetails, PaymentOption, Website, Facilities) VALUES ('${req.body.name}','${req.body.address1}', '${req.body.address2}', '${req.body.address3}', '${req.body.contactNumber}', '${req.body.cuisine}', '${req.body.open}', '${req.body.close}', '${req.body.parking}',  '${req.body.payment}',  '${req.body.website}',  '${req.body.facilities}')`;
    
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