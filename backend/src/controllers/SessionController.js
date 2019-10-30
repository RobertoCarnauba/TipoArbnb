const User = require('../models/User')

//Index, show, store, update, destroy

module.exports = {
    //async await - Para dar um tempp para o banco guardar
 async store(req, res){
     const { email } = req.body;
      
     let user = await User.findOne({ email });

     if(!user){
        user = await User.create({ email });
     }
     
     return res.json(user);
 }
}