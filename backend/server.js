const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;
const DB = "apedcl";


//Acquireiing the routers
const userRouter = require("./routes/userRouter/userRoutes");




app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//Connection to MongoDB

mongoose.connect('mongodb://127.0.0.1:27017/' + DB, { useNewUrlParser: true, useUnifiedTopology: true  });
const connection = mongoose.connection;
connection.once('open', () => console.log("MongoDB connection estblished successfully"))


//Setupu API endPoints
app.use("/user", userRouter);



app.listen(PORT, () => console.log(`Server is running in the localhost on PORT : ${PORT}`));    
