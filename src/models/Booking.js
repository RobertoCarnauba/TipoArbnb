const mongose = require('mongoose')


const BookingSchema = new mongose.Schema({

     date: String,
     approved: Boolean,
   
    user: {
        type: mongose.Schema.Types.ObjectId,
        ref: 'User'
    },
    spot: {
        type: mongose.Schema.Types.ObjectId,
        ref: 'Spot'
    }

});

module.exports = mongose.model('Booking', BookingSchema);