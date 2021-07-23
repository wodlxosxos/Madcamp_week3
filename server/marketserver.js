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
    const myDb = db.db("mydb");
    const market = myDb.collection("market");
    //const user_table = myDb.collection("Userdata");
    //const rent_bike_table = myDb.collection("Rentdata");
    //------------------------------------------
    app.post("/marketreg", (req, res) => {
      console.log(req.body.item_title);

      market.find({}).toArray(function (err, result) {
        const reg = {
          key: result.length + 1,
          emailId: "hji0104@kaist.ac.kr",
          itemTitle: req.body.item_title,
          itemPrice: req.body.item_price,
          itemDetail: req.body.item_detail,
          heartClick: req.body.item_heart,
          mkType: req.body.mkType,
        };
        market.insertOne(reg, (err, result) => {
          res.status(200).send();
        });
      });
    });
    app.get("/getmarket", (req, res) => {
      console.log("check");
      market.find({}).toArray(function (err, result) {
        res.status(200).send(JSON.stringify(result));
      });
    });

    app.post("/signUp", (req, res) => {
      //user 정보 변수에 저장
      console.log(req.body);
      const newUser = {
        user_id: req.body.user_id,
        user_password: req.body.user_password,
        user_name: req.body.user_name,
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
            res
              .status(200)
              .send(JSON.stringify({ user_name: result.user_name }));
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
      };
      rent_bike_table.findOne({});
    });
  }
});
app.listen(80, () => {
  console.log("Listening on port 80....");
});
