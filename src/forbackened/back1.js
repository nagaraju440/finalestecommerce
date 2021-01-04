const express = require('express');
const app = express();
var http = require('http').createServer(app)
const PORT =  process.env.PORT || 4000;
http.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
});
var io = require('socket.io')(http)
const bodyParser = require('body-parser');
var getRawBody = require('raw-body')
const cors = require('cors');
var FormData = require('form-data');
const fileUpload = require('express-fileupload');
const mongoose = require('mongoose');
const { string } = require('prop-types');
// const multer = require('multer')
var ss = require('socket.io-stream');
var Schema = mongoose.Schema;
var fs = require("fs");
const { ExpressPeerServer } = require('peer');
const path=require('path')
const peer = ExpressPeerServer(http, {
    path: '/myapp'
});
app.use(express.static('../'));
app.get('*', (req, res) => {
    console.log("hiiii")
    res.sendFile('index.html', {root: path.join(__dirname, '../')});
});

app.use('/peerjs', peer);

// const data=null;
// const url='mongodb://127.0.0.1:27017/mydb';
const url = "mongodb://balanagaraju:Nagaraju2506@cluster0-shard-00-00.xka5z.mongodb.net:27017,cluster0-shard-00-01.xka5z.mongodb.net:27017,cluster0-shard-00-02.xka5z.mongodb.net:27017/mydb?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority"

// var Peer=require("simple-peer")
// var peer2 = new Peer() 
// // var wrtc = require('wrtc')

// peer2.on('signal', data => {
//   // when peer2 has signaling data, give it to peer1 somehow
// //   console.log("dat is ",data)

//   peer1.signal(data)
// })
//  peer2.on('data', data => {
//   // got a data channel message
//   console.log('got a message from peer1: ' + data)
// })

app.use(cors());
app.use(fileUpload());
app.use(bodyParser.json());
mongoose.connect(url, { useNewUrlParser: true })
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("data connected sucsessfully")
});
var message = new Schema({
    arr: [],
})
var message1 = mongoose.model("privatemessages", message);

io.on('connection', (socket) => {
    console.log("socket conected");
    // socket.join('balanagaraju2506@gmail.com')
    socket.on('join', data => {
        socket.join(data.name)

        console.log(data.name)
    })
    // io.to('balanagaraju2506@gmail.com').emit('new',"hlo nagg")
    // io.emit("hii",{hii:"helllooo"})
    socket.on("hii", y => {
        console.log(y, "y iss")
    })
    // fs.readFile('download.png', function (err, data) {
    //     if (err) throw err;
    //     // res.write(data);
    //     console.log(typeof data)
    //     // console.log(data.toString('base64'))
    //     io.emit('image', data.toString('base64'))
    // });
    socket.on('groupmessage', (grpmessage) => {
        io.emit('groupmessage', { grpmessage })
        console.log(grpmessage)
    })
    socket.on('upload', h => {
        console.log(typeof h, "h isss hlooooo")
        var m = String.fromCharCode.apply(null, h);
        var n = Buffer.from(m, 'binary').toString('base64')
        console.log("buffer is", m, typeof n)
    })
    socket.on('singlesmsg', (singlemsg) => {
        // socket.join("some room")
        // socket.join(singlemsg[1])
        io.to(singlemsg[2]).emit('singlesmsg', { singlemsg })
        io.to(singlemsg[1]).emit('singlesmsg', { singlemsg })
        // socket.to("some room").emit('some room2',{singlemsg})
        console.log(socket.to("some room").emit('singlesmsg', { singlemsg }))
        console.log(singlemsg, "msg areee")
        var one = new message1({
            arr: singlemsg
        })
        one.save((err, res) => {
            console.log(res, "res is ")
        })
    })
    socket.on("meeting", h => {
        console.log(h[2], h[0], h[1], "h is")
        app.post("/meetids", (req, res) => {
            console.log(req.body, "req iss")
            var details = new meets({ id: req.body.id, name: req.body.name })
            details.save((err, res) => {
                console.log("meeting details saved sucseesfully")
            })
        })
        socket.join("someroom");
        socket.to("someroom").emit("hii", h)
    })
    socket.on("base64 file", msg => {
        io.emit('groupphoto', msg.file);
    })
})
peer.on('connection', (conn) => {
    conn = peer.connect('hlo');

    console.log("peer js client conncted", peer.id)
    conn.on('open', () => {
        conn.send("hlooo")
        console.log("hlooooo")

    })
    conn.on('data', function (data) {
        // Will print 'hi!'
        console.log(data, "hehhehehehehhe");
    });
})




app.get('/gettingmessages', (req, res) => {
    message1.find({}, (err, res1) => {
        res.send(res1)
    })
})
// app.post('/messages',(req,res)=>{
//     console.log(req.body,"req iss")
//     console.log(req.body[0],"0 iss",req.body[1],"1 is",req.body[2],"2 is")

// })

app.get('/', (req, res) => {
    // console.log("hiiii")
    res.send("hello")
})
var personschema = new Schema({
    name1: String,
    email1: String,
    password1: String,
})
var Person = mongoose.model("Users", personschema);
var meetingids = new Schema({
    id: String,
    name: String,
})
var meets = mongoose.model("meetingdetails", meetingids)
app.post('/signup', (req, res) => {
    var Name = req.body.Name;
    var email = req.body.email;
    var password = req.body.password;
    console.log(Name, email, password, "these are the values")
    var user = new Person({
        name1: req.body.Name, email1: req.body.email, password1: req.body.password,
    })
    console.log(user, "user isssssss hiiiiiiiiiiii")
    user.save((err, res1) => {
        console.log("user dtails saved sucsessfully", res1)
    })
})

var data;
Person.findById("5f72c709aa437c1890bb0628", (err, res1) => {
    if (err) console.log("errrr")
    data = res1;
    // console.log(data,"res is")
})
app.get('/users', (req, res) => {
    Person.find({}, (err, user) => {
        res.send(user)
    })
})
app.get('/api', (req, res) => {
    res.send("pravenn")
    console.log("praveen")
})

app.post('/chatusers', (req, res) => {
    console.log(req.body, "messages")
})
// const storage = multer.diskStorage({
//     destination: "./public/uploads/",
//     filename: function (req, file, cb) {
//         cb(null, "IMAGE-" + Date.now() + path.extname(file.originalname));
//     }
// });

app.get("/meet", (req, res) => {
    meets.find({}, (err, det) => {
        res.send(det)
    })
})
