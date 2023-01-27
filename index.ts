import * as express from "express";
import { Product } from "./db/product";

const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());

app.get("/products", async (req, res) => {
  const allProducts = await Product.findAll();
  res.json(allProducts);
});

app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  const productFound = await Product.findAll({
    where: { id },
  });
  res.json(productFound);
});

app.post("/products", async (req, res) => {
  const newProduct = await Product.create(req.body);
  res.json(newProduct);
});

app.patch("/products/:id", async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const modifiedProduct = await Product.update({ title }, { where: { id } });
  res.json(modifiedProduct);
});

app.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  await Product.destroy({ where: { id } });
  res.json({ message: "Deleted product" });
});

app.listen(port, () => {
  console.log("Corriendo en puerto http://localhost:" + port);
});
