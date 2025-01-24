import { Router } from 'express'
import { HomeController } from '../controllers/home.controller'
import dbconnect from '../services/db'
import { MongoClient } from 'mongodb'
import mongoose from 'mongoose'

class HomeRoutes {
  router = Router()
  client : MongoClient = {} as MongoClient
  constructor() {
    this.intializeRoutes()
    dbconnect();
    // dbconnect().then((value) => this.client = value);
  }

  intializeRoutes() {
    this.router.get('/', async (req, res) => {
      
      HomeController.welcome(req, res)
    })

    const legoSchema = new mongoose.Schema({ 
      name: String, 
      color: String,
      size: String,
      price: Number,
      quantity: Number, 
  }); 

  this.router.get('/legos', async(req, res) => {
    const Lego = mongoose.model("Lego", legoSchema); 
    const results = await Lego.find({});
    res.json(results)
  })

    this.router.post('/', async (req, res) => {
      console.log(req.body)
      const Lego = mongoose.model("Lego", legoSchema); 

    const insertDefault = async() => {
        // Lego.insertMany([{name: 'test', color:'color', size: '', price: 0, quantity: 0}])
        Lego.insertMany([req.body])
    }
    await insertDefault();
    });
  }
}

export default new HomeRoutes().router
