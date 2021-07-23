const express = require("express");
const app = express();
const port = 80;
const mongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const http = require("http");
const socketIo = require("socket.io");

server = app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
io = require("socket.io")(server);

app.use(express.json());
mongoClient.connect(url, (err, db) => {
  if (err) {
    console.log("Error while connecting mongo client");
  } else {
    const myDb = db.db("myDb");
    const usercollection = myDb.collection("UserTable");
    const placecollection = myDb.collection("PlaceTable");
    const collection_chat = myDb.collection("collection_chat");

    app.post("/img", (req, res) => {
      console.log("hihi");
      res.status(400).send();
    });

    app.get("/chats/:userId", (req, res) => {
      collection_chat
        .find({
          $or: [{ reciever: req.params.userId }, { sender: req.params.userId }],
        })
        .toArray(function (err, result) {
          res.status(200).send(JSON.stringify(result));
        });
    });

    app.post("/chatsend", (req, res) => {
      const query = {};
      collection_chat.findOne(
        {
          $or: [
            { reciever: req.body.reciever, sender: req.body.sender },
            { reciever: req.body.sender, sender: req.body.reciever },
          ],
        },
        (err, result) => {
          if (result == null) {
            const chat = {
              sender: req.body.sender,
              reciever: req.body.reciever,
              messages: req.body.messages,
            };
            collection_chat.insertOne(chat, (err, result) => {
              res.status(200).send();
            });
          } else {
            collection_chat.updateOne(
              {
                $or: [
                  { reciever: req.body.reciever, sender: req.body.sender },
                  { reciever: req.body.sender, sender: req.body.reciever },
                ],
              },
              { $set: { messages: req.body.messages } },
              (err, result) => {
                res.status(200).send();
              }
            );
          }
        }
      );
    });

    app.get("/chats/:sender/:reciever", (req, res) => {
      console.log("hihi");
      const chat = collection_chat.findOne(
        {
          $or: [
            { reciever: req.params.reciever, sender: req.params.sender },
            { reciever: req.params.sender, sender: req.params.reciever },
          ],
        },
        (err, result) => {
          if (result == null) {
            console.log("1");
            res.status(200).send(JSON.stringify([]));
          } else {
            console.log(result.messages);
            res.status(200).send(JSON.stringify(result.messages));
          }
        }
      );
    });
  }
});

var clients = []; //connected clients

io.on("connection", (socket) => {
  console.log("New User Connected");
  socket.on("storeClientInfo", function (data) {
    console.log(data.customId + " Connected");
    //store the new client
    var clientInfo = new Object();
    clientInfo.customId = data.customId;
    clientInfo.clientId = socket.id;
    clients.push(clientInfo);

    //update the active status
    const res = User.updateOne({ id: data.customId }, { isActive: true });
    res.exec().then(() => {
      console.log("Activated " + data.customId);

      //Notify others
      socket.broadcast.emit("update", "Updated");
      console.log("emmited");
    });
  });

  socket.on("disconnect", function (data) {
    for (var i = 0, len = clients.length; i < len; ++i) {
      var c = clients[i];

      if (c.clientId == socket.id) {
        //remove the client
        clients.splice(i, 1);
        console.log(c.customId + " Disconnected");

        //update the active status
        const res = User.updateOne({ id: c.customId }, { isActive: false });
        res.exec().then((data) => {
          console.log("Deactivated " + c.customId);

          //notify others
          socket.broadcast.emit("update", "Updated");
        });
        break;
      }
    }
  });
});

//Messages Socket
const chatSocket = io.of("/chatsocket");
chatSocket.on("connection", function (socket) {
  //On new message
  socket.on("newMessage", (data) => {
    //Notify the room
    socket.broadcast.emit("incommingMessage", "reload");
  });
});
