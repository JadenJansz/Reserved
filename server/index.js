import express, { query } from "express"
import mysql from "mysql"
import cors from 'cors'
import bodyParser from 'body-parser'

import cookieParser from 'cookie-parser'
import session from 'express-session'
import multer from 'multer'
import path from "path"
import e from "express"

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

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.use(express.static('Images'));
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

app.get("/search_restaurants_name", (req, res) => {
    console.log(req.query)
    const sql = `SELECT RestaurantID FROM restaurant WHERE Name LIKE '${req.query.name}%' `

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
    const sql = `SELECT* FROM restaurant WHERE RestaurantID = ${req.query.id}`;

    db.query(sql, (err, data) => {
        if(err) return res.json(err)


        return res.json(data)
    })
})

app.get("/check_availability", (req, res) => {

    const sql = `SELECT * FROM reservation WHERE RestaurantID = ${req.query.id} AND Date LIKE '${req.query.table.date}' AND Time LIKE '${req.query.table.time}' `

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

app.get('/view_review_customer', (req, res) => {
    const sql = `SELECT * FROM review WHERE RestaurantID = ${req.query.id}`
    // console.log(req.query.id)
    db.query(sql, (err, data) => {
        if(err) return res.json(err)

        return res.json(data)
    })
})

app.get("/admin_login", (req, res) => {
    const sql = `SELECT email,Role,status FROM user WHERE email = '${req.query.email}' AND password = '${req.query.password}' ` ;
    if(req.session.user){
        res.send({ loggedIn: true, user: req.session.user })
    }else{
        res.send({ loggedIn: false })
    }

})

app.get('/admin_restaurant_registration_report', (req, res) => {
    console.log(req.query)
    const sql = `SELECT Name, AddressLine1,AddressLine2,AddressLine3,ContactNumber FROM restaurant WHERE DateJoined < '${req.query.year}-${req.query.month}-30' AND DATE >  '${req.query.year}-${req.query.month}-01' `   

    db.query(sql, (err, data) => {
        if(err) return res.json(err)

        return res.json(data)
    })
})

app.get('/admin_income_report', (req, res) => {

    const sql = `SELECT restaurant.Name, reservation.* FROM restaurant, reservation WHERE restaurant.RestaurantID = reservation.RestaurantID`

    db.query(sql, (err, data) => {
        if(err) return res.json(err)

        return res.json(data)
    })
})

app.get('/restaurant_reservation_report', (req, res) => {
    
    const sql = `SELECT * FROM reservation WHERE RestaurantID = ${req.query.id} AND Date < '${req.query.year}-${req.query.month}-30' AND DATE >  '${req.query.year}-${req.query.month}-01'`

    db.query(sql, (err, data) => {
        if(err) return res.json(err)

        return res.json(data)
    })
})

app.post("/customer_login", (req, res) => {
    
    const sql = `SELECT * FROM user WHERE Email = '${req.body.email}' AND password = '${req.body.password}'`

    db.query(sql, (err, data) => {
        // console.log(data)
        if(data.length > 0){
            const details = `SELECT * FROM customer WHERE Email = '${req.body.email}'`

            db.query(details, (err, data) => {
                if(err) return res.json(err)
        
                return res.json(data)
            })
        }
        else{
            res.send('Invalid Credentials')
        }
        if(err) return res.json(err)
    })
})

app.post("/admin_login", (req, res) => {
    const sql = `SELECT email,Role,status FROM user WHERE email = '${req.body.email}' AND password = '${req.body.password}' AND Role IN ('ResAdmin', 'Admin') ` ;
    db.query(sql, (err, data) => {
        if(err) return res.json(err)

        if(data.length > 0){
            
            if(data[0].Role === "ResAdmin" && data[0].status === "Active"){

                req.session.user = data
                // console.log(req.session.user)
                const getRetaurantId = `SELECT RestaurantID, restaurant_admin.* 
                FROM restaurant, restaurant_admin 
                WHERE restaurant.RestaurantAdminID = restaurant_admin.RestaurantAdminID AND Email = '${data[0].email}'`
                
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
    // console.log(req.query)

    const sql = `SELECT reservation.*, customer.FirstName, customer.LastName
    FROM reservation, customer 
    WHERE reservation.CustomerID = customer.CustomerID AND RestaurantID = ${req.query.id} AND Date >= CURRENT_DATE AND status = 'Active'`

    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.get("/past_reservations", (req, res) => {

    const sql = `SELECT reservation.*, customer.FirstName, customer.LastName
    FROM reservation, customer 
    WHERE reservation.CustomerID = customer.CustomerID AND RestaurantID = ${req.query.id} AND status = 'Cancelled'`

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
    const sql = `INSERT INTO user(Role, Email, Password,status) VALUES ('ResAdmin', '${req.body.email}', '${req.body.password}', 'Inactive') `

    db.query(sql, (err, data) => {
        if(err) return res.json(err);

        if(data.affectedRows > 0){
            
            const sql = `INSERT into restaurant_admin(Email) VALUES ('${req.body.email}')`
    
            db.query(sql, (err, data) => {
                if(err) return res.json(err);
                return res.json(data);
            })
        }
    })
})

app.post("/add_restaurant_details", (req, res) => {
    // console.log(req.body)
    const sql = `Insert into restaurant (Name, AddressLine1, AddressLine2, AddressLine3, ContactNumber, Cuisine, OpenTime, CloseTime, ParkingDetails, PaymentOption, Website, Facilities) VALUES ('${req.body.name}','${req.body.address1}', '${req.body.address2}', '${req.body.address3}', '${req.body.contactNumber}', '${req.body.cuisine}', '${req.body.open}', '${req.body.close}', '${req.body.parking}',  '${req.body.payment}',  '${req.body.website}',  '${req.body.facilities}')`;
    
    db.query(sql, (err, data) => {
        if(err) return res.json(err);

        if(data.affectedRows > 0){
            
            const id = `UPDATE restaurant SET RestaurantAdminID = ${data.insertId} WHERE RestaurantID = ${data.insertId}`
            
            db.query(id, (err, data) => {
                if(err) return res.json(err);
                
                const password = `UPDATE user SET Password = '${req.body.password}', status = 'Active' WHERE Email = '${req.body.email}'`
                
                db.query(password, (err, data) => {
                    if(err) return res.json(err);
                    return res.json(data);
                })
            })
        }else{
            return res.json({data:'Inactive User'})
        }
    })
})

app.post("/upload_menu", upload.array("image"), (req, res) => {
    const arr = [];
    req.files.map((obj, i) => {
        arr.push(obj.filename)
    })
    console.log(arr)

    const sql = `UPDATE restaurant SET Menu = ${JSON.stringify(arr)} WHERE RestaurantID = ${req.body.id}`

    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.post("/upload_images", upload.array("image"), (req, res) => {
    // console.log(req.files)  

    const arr = [];
    req.files.map((obj, i) => {
        arr.push(obj.filename)
    })
    console.log(arr)
    const select = `SELECT * from restaurant WHERE RestaurantID = ${req.body.id}`

    db.query(select, (err, data) => {
        console.log(JSON.parse(data[0].Image))
        if(JSON.parse(data[0].Image) !== null){
            
            const newArr = JSON.parse(data[0].Image).concat(arr)
            console.log(newArr)
            
            const sql = `UPDATE restaurant SET Image = '${JSON.stringify(newArr)}' WHERE RestaurantID = ${req.body.id}`
            db.query(sql, (err, data) => {
                if(err) return res.json(err);
                return res.json(data);
            })
        }else{
            const sql = `UPDATE restaurant SET Image = '${JSON.stringify(arr)}' WHERE RestaurantID = ${req.body.id}`
            db.query(sql, (err, data) => {
                if(err) return res.json(err);
                return res.json(data);
            })
        }
    })

})

app.delete("/delete_restaurant/:id", (req, res) => {
    console.log(req.params.id)
    const sql = `DELETE FROM restaurant WHERE RestaurantID = ${req.params.id}`

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

app.post("/add_reservation", (req, res) => {
    // console.log(req.body);
    const sql = `INSERT INTO reservation(RestaurantID, CustomerID, Date, Time, TableSize, status) VALUES (${req.body.restaurant}, ${req.body.data.CustomerID}, '${req.body.table.date}', '${req.body.table.time}', ${req.body.table.count}, 'Active')`;
    
    db.query(sql, (err, data) => {
        if(err) return res.json(err);

        if(data.affectedRows > 0){
            const payment =`INSERT INTO payment(ReservationID, Amount) VALUES(${data.insertId}, "1000.00")`

            db.query(payment, (err, data) => {
                if(err) return res.json(err);
                return res.json(data);
            })
        }
    })
})

app.put("/end_reservation/:id", (req, res) => {
    console.log(req.params.id)
    const sql = `UPDATE reservation SET status = 'Cancelled' WHERE ReservationID = ${req.params.id}`

    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.listen(8800, () => {
    console.log("Connected to backend!")
})