const fs = require('fs');
const DATABASE = "mongodb+srv://manishkaswan88:gJLrwn18LEN6qooi@cluster0.z3dh8rj.mongodb.net/";
const csv = require('csv-parser');
const mongoose = require("mongoose");

const HotelBooking = require('./models/hotelBooking');

const csvFilePath = './hotel_bookings_1000.csv';

mongoose.connect(DATABASE)
.then(() => {
    console.log("DB is connected");
})
.catch((err) => {
    console.log(err);
});

fs.createReadStream(csvFilePath)
  .pipe(csv())
  .on('data', (row) => {
    // Create a new HotelBooking document and save it to the MongoDB database
    const booking = new HotelBooking({
      arrival_date_year: row.arrival_date_year,
      arrival_date_month: row.arrival_date_month,
      arrival_date_day_of_month: row.arrival_date_day_of_month,
      adults: row.adults,
      children: row.children,
      babies: row.babies,
      country: row.country,
    });

    booking.save()
      .then(() => {
        console.log('Booking saved:', booking);
      })
      .catch((error) => {
        console.error('Error saving booking:', error);
      });
  })
  .on('end', () => {
    console.log('CSV file processing complete.');
  });
