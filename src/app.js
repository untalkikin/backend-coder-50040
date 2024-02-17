import express from "express";
import cartRouter from "./routes/cart.routes.js";
import productRouter from "./routes/product.routes.js"

const PORT = 8080;
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/cart", cartRouter);
app.use("/api/products", productRouter);

app.listen(PORT, () => console.log(`El servidor esta escuchando en el: ${PORT}`))