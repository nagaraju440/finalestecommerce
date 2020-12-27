const express = require('express');
const app = express();
var http = require('http').createServer(app)
const PORT = 5000;
http.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
});
var io = require('socket.io')(http)
const bodyParser = require('body-parser');
const cors = require('cors');
var FormData = require('form-data');
const fileUpload = require('express-fileupload');
const mongoose = require('mongoose');
const { string } = require('prop-types');
// const multer=require('multer')
var ss = require('socket.io-stream');
var Schema = mongoose.Schema;
var fs = require("fs");
// const url = 'mongodb://127.0.0.1:27017/serverforec';
const url = "mongodb://balanagaraju:Nagaraju2506@cluster0-shard-00-00.xka5z.mongodb.net:27017,cluster0-shard-00-01.xka5z.mongodb.net:27017,cluster0-shard-00-02.xka5z.mongodb.net:27017/mydb?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority"
app.use(cors());
app.use(fileUpload());
app.use(bodyParser.json());
mongoose.connect(url, { useNewUrlParser: true })
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("data connected sucsessfully")
});

app.get("/", (req, res) => {
    res.send("hello wolrd")
})
var shop = new Schema({
    shopname: String,
    email: String,
    password: String,
})
var shopuser = mongoose.model("shopusers", shop)
app.post("/signup", (req, res) => {
    var shopusers = new shopuser({ shopname: req.body.shopname, email: req.body.email, password: req.body.password })
    shopusers.save((err, res) => {
        console.log("shopuser details saved sucsessfully", res)
    })
})

app.get("/shopusers", (req, res) => {
    shopuser.find({}, (err, res1) => {
        res.send(res1)
    })
})
var m = [], h = {};
var shopitems = new Schema({
    image: String,
    shopname: String,
    itemname: String,
    cost: String,
})
var shopitems1 = mongoose.model("items", shopitems)
//    var shopitems1;
io.on('connection', socket => {
    console.log("shop user connected")
    shopuser.find({}, (err, res1) => {
        m = []
        // res.send(res1)
        res1.map(k => {
            m.push(k.shopname)
        })
        console.log(" final m iss", m)
        hello();
    })
    socket.on("join", n => {
        console.log(n, "n isss")
        socket.join(n);
        // m.push(n)

        // console.log("m isss",m)
    })
    socket.on('shopitems', l => {
        io.to(l[3]).emit('itemslis  t', l)
        var shopitems2 = new shopitems1({ image: l[0], shopname: l[3], itemname: l[1], cost: l[2] })
        shopitems2.save((err, res) => {
            console.log("item saved sucsssfully")
        })
        hello()
    })
})
var l = []
hello = () => {
    console.log("hlooo okk function camee ", m)
    m.map(k => {
        app.get("/" + k, (err, res) => {
            l = [];
            console.log("k isss", k)
            shopitems1.find({}, (err, res1) => {
                //   console.log(res1)
                res1.map(n => {
                    if (n.shopname === k) {
                        l.push(n)
                    }
                })
                res.send(l);
            })
        })
    })
}
app.get('/wholeitems', (err, res) => {
    shopitems1.find({}, (err, res1) => {
        res.send(res1)
    })
})

