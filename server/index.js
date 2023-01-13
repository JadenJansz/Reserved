import express from "express"
import mysql from "mysql"
import cors from 'cors'
import bodyParser from 'body-parser'

import cookieParser from 'cookie-parser'
import session from 'express-session'
import multer from 'multer'
import path from "path"

const app = express();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Images')
    },
    filename: (req, file, cb) => {
        console.log(file)
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({ storage: storage })

app.use(cors({
    origin: ('http://localhost:3000'),
    methods: ('GET', 'POST'),
    credentials: true
}));

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
    session({
      key: "userId",
      secret: "userID",
      resave: false,
      saveUninitialized: false,
      cookie: {
        expires: 60 * 60 * 24,
      },
    })
  );

const db = mysql.createPool({
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
    console.log(req.query)
    const sql = `SELECT* FROM restaurant WHERE RestaurantID = ${req.query.id}`;

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
    const sql = `SELECT email,Role,status FROM user WHERE email = '${req.query.email}' AND password = '${req.query.password}' ` ;
    db.query(sql, (err, data) => {
        if(err) return res.json(err)

        if(data.length > 0){
            
            if(data[0].Role === "ResAdmin" && data[0].status === "Active"){

                req.session.user = data
                const getRetaurantId = `SELECT RestaurantID from restaurant WHERE RestaurantAdminID = (SELECT RestaurantAdminID FROM restaurant_admin WHERE Email = '${data[0].email}')`
                
                db.query(getRetaurantId, (err,data) => {
                    if(err) return res.json(err)
                    
                    return res.json({ data: data[0], role: "ResAdmin"})
                })

            }else if(data[0].Role === "Admin"){

                return res.json({ data: data[0], role: "Admin"})

            }else if(data[0].status === "Inactive"){
                
                return res.json({ data: data[0], role: "ResAdmin" })
            }
        }else{
            return res.json({data:'Inactive User'})
        }

        // return res.json(data)
    })
})

app.get("/admin_view_reataurants", (req, res) => {

    const sql = "SELECT * FROM restaurant"

    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.get("/current_reservations", (req, res) => {

    const sql = "SELECT * FROM reservation WHERE Date >= CURRENT_DATE AND Time >= CURRENT_TIME"

    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.get("/past_reservations", (req, res) => {

    const sql = "SELECT * FROM reservation WHERE Date <= CURRENT_DATE AND Time <= CURRENT_TIME"

    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.post("/create_customer", (req, res) => {
    const sql = `Insert into customer (Email, FirstName, LastName, ContactNumber, City) values ('${req.body.email}','${req.body.firstName}', '${req.body.lastName}', '${req.body.contactNumber}', '${req.body.city}')`;
    
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.post("/admin_create_restaurant", (req, res) => {

    const random = Math.floor(Math.random() * (1000000 - 100000) + 100000);
    const sql = `INSERT INTO user(Role, Email, Password,status) VALUES ('ResAdmin', '${req.body.email}', '${random}', 'Inactive') `

    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.post("/add_restaurant_details", upload.single("image"), (req, res) => {
    // console.log(req.body)
    console.log(req.file)
    const sql = `Insert into restaurant (Name, AddressLine1, AddressLine2, AddressLine3, ContactNumber, Cuisine, OpenTime, CloseTime, ParkingDetails, PaymentOption, Website, Facilities) VALUES ('${req.body.name}','${req.body.address1}', '${req.body.address2}', '${req.body.address3}', '${req.body.contactNumber}', '${req.body.cuisine}', '${req.body.open}', '${req.body.close}', '${req.body.parking}',  '${req.body.payment}',  '${req.body.website}',  '${req.body.facilities}')`;
    
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.delete("/delete_restaurant/:id", (req, res) => {
    const sql = `DELETE FROM restaurants WHERE RestaurantID = ${req.params.id}`

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