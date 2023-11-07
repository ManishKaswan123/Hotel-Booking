const mongoose = require("mongoose");

const hotelBookingSchema = new mongoose.Schema({
  arrival_date_year: Number,
  arrival_date_month: String,
  arrival_date_day_of_month: Number,
  adults: Number,
  children: Number,
  babies: Number,
  country: String,
});

const HotelBooking = mongoose.model('HotelBooking' , hotelBookingSchema);

module.exports = HotelBooking;
