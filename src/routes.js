
var express = require('express');
const multer = require('multer')
const uploadConfig = require('./config/upload')

const SessionController = require('./controllers/SessionController')
const SpotController = require('./controllers/SpotController')
const DashboardController = require('./controllers/DashboardController')
const BookingController = require('./controllers/BookingController')


const routes = express.Router();
const upload = multer(uploadConfig);

//Metodos das Rotas
//GET ,POST , PUT, DELETE

//Tipod de paramentro que podemos passar
//req.query = Acessar query params(para filtros) {id:req.query.id}
//req.params = Acessar route params(para edção e delete) {id:req.params.id }
//req.body = acessar corpo da requisição(para criação, edição) (req.body)

routes.post('/sessions', SessionController.store);

routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);
routes.post('/spots/:spot_id/bookings', BookingController.store)

routes.get('/dashboard', DashboardController.show);




module.exports = routes