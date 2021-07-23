const express = require("express");
const app = express(); // express app 생성
const mongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";

app.use(express.json());
mongoClient.connect(url, (err, db) => {
  if (err) {
    console.log("Error while connecting mongo client");
  } else {
    console.log("Connected mongo client");
    const myDb = db.db("myDb2");
    const user_table = myDb.collection("Userdata");
    const rent_bike_table = myDb.collection("Rentdata");
    //------------------------------------------
    app.post("/signUp", (req, res) => {
      //user 정보 변수에 저장
      console.log(req.body);
      const newUser = {
        user_id: req.body.user_id,
        user_password: req.body.user_password,
        user_name: req.body.user_name,
        bike: 0,
      };
      user_table.findOne({ user_id: newUser.user_id }, (err, result) => {
        if (result == null) {
          user_table.insertOne(newUser, (err, result) => {
            res.status(200).send();
          });
        } else {
          res.status(400).send();
        }
      });
    });
    app.post("/signIn", (req, res) => {
      user_table.findOne({ user_id: req.body.user_id }, (err, result) => {
        if (result != null) {
          if (result.user_password === req.body.user_password) {
            res.status(200).send(JSON.stringify({ user_name: result.user_name }));
          } else {
            res.status(401).send(JSON.stringify({ user_name: "Wrong PW" }));
          }
        } else {
          res.status(400).send(JSON.stringify({ user_name: "Wrong ID" }));
        }
      });
    });
    app.post("/regNewRentBike", (req, res) => {
      const newBike = {
        user_id: req.body.user_id,
        user_name: req.body.user_name,
        rating: [0, 0],
        hour_fee: req.body.hour_fee,
        day_fee: req.body.day_fee,
        table: [],
        building: req.body.building,
      };
      user_table.findOne({ user_id: req.body.user_id }, (err, result) => {
        if (result != null) {
          rent_bike_table.insertOne({
            user_id: req.body.user_id,
            user_name: req.body.user_name,
            rating: [0, 0],
            hour_fee: req.body.hour_fee,
            day_fee: req.body.day_fee,
            table: [],
            building: req.body.building,
            bike_id: result.bike,
          }, (err, result) => {
          });
          user_table.updateOne({ user_id: req.body.user_id }, { $set: { bike: result.bike + 1 } }, (err, result) => {
            res.status(200).send();
          });
        } else {
          res.status(400).send();
        }
      })
    });
    app.post("/delMyRentBike", (req, res) => {
      rent_bike_table.deleteOne({ user_id: req.body.user_id, bike_id: req.body.bike_id }, (err, obj) => {
        rent_bike_table.find({ user_id: req.body.user_id }).toArray(function (err, docs) {
          res.status(200).send(JSON.stringify(docs));
        });
      });
    });
    app.post("/getRentBike", (req, res) => {
      rent_bike_table.find({ building: req.body.building_name }).toArray(function (err, docs) {
        res.status(200).send(JSON.stringify(docs));
      });
    });
    app.post("/getMyRentBike", (req, res) => {
      rent_bike_table.find({ user_id: req.body.user_id }).toArray(function (err, docs) {
        res.status(200).send(JSON.stringify(docs));
      });
    });
  }
});
app.listen(80, () => {
  console.log("Listening on port 80....");
});