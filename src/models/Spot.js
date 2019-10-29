const mongose = require('mongoose')


const SpotSchema = new mongose.Schema({

    thumbnail: String,
    company: String,
    price: Number,
    techs:[String],
    user: {
        type: mongose.Schema.Types.ObjectId,
        ref: 'User'
    }

});

module.exports = mongose.model('Spot', SpotSchema);