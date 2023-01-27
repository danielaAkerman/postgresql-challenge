import * as express from "express";
import { Sequelize, Model, DataTypes } from "sequelize";
import { sequelize } from "./db";
import { User } from "./db/user";
import { Product } from "./db/product";

const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());

app.get("/product", (req, res) => {
  Product.findAll().then(snap=>{
    res.json(snap.map((i) => i.dataValues))
  })})
  
app.get("/product/:title", (req, res) => {
  const { title } = req.params;
  Product.findAll({
    where:{title}
  }).then(snap=>{
    res.json(snap.map((i) => i.dataValues))
  })})



app.listen(port, () => {
  console.log("Corriendo en puerto http://localhost:" + port);
});
