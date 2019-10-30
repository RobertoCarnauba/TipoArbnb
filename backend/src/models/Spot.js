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

},{
    toJSON: {
        virtuals: true
    }
});
//Aqui sera criado uma file para rederizar as imagens
SpotSchema.virtual('thumbnail_url').get(function() {
    return `http://localhost:3333/files/${this.thumbnail}`
  })

module.exports = mongose.model('Spot', SpotSchema);