const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
const HotelBooking = require("./models/hotelBooking");
const app = express();

const DATABASE = "mongodb+srv://manishkaswan88:gJLrwn18LEN6qooi@cluster0.z3dh8rj.mongodb.net/";
const PORT = 3001;
const BASE_URL = 'https://654bc8310c1a031ada264a67--luxury-tapioca-81cd63.netlify.app/';
// const PORT = process.env.PORT;

app.use(cors({
  origin: `${BASE_URL}`,  
  credentials: true,  
}));

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

mongoose.connect(DATABASE)
.then(() => {
    console.log("DB is connected");
})
.catch((err) => {
    console.log(err);
});

app.use(express.json());

app.get("/" , async(req , res) => {
  try {
      let hotelData = await HotelBooking.find();
      console.log(hotelData);
      if(hotelData) {
          res.json ({
              message: "hotelData Retrieved",
              data: hotelData
          });
      }
    }
  catch(err) {
      res.json ({
          message: "Data Nahi Mila"
      });
  }
});