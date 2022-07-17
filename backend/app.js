const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { init } = require('./dbconnect');
const BookModel = require('./models/book');
const UserModel = require('./models/user');

const app = express();

app.use(bodyParser.json());
app.use(cors());

email = "admin@admin.com"
password = "admin123"

//Get all books from db
app.get('/books', async (req, res) =>{
  const books = await BookModel.find();
  res.status(200).send(books);
});

//add new book to db
app.post('/books', async (req,res) => {
  const book = req.body;
  const newbook = await BookModel.create(book);
  res.status(201).send(newbook);
});

//add new user to db
app.post('/users', async (req,res) => {
  const user = req.body;
  const newuser = await UserModel.create(user);
  res.status(201).send(newuser);
});

//login verify
app.post('/userlogin', async (req,res) => {
  
  // const userData = req.body;

  // const theuser = await UserModel.create(userData);
  

  // if (!email) {
  //   res.status(401).send('Invalid Email');
  // }
  // if (password !==userData.password){
  //   res.status(401).send('Invalid Password')
  // }
  // else{
  //   console.log('loggedin');
  //   res.status(200).send();
  // }
  
});


//Listening to port
app.listen(3000, () => {
    console.log("server is listening on port 3000!");
    init();
});