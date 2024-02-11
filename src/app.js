import express from "express";
import 

const PORT = 8080;
const app = express;


app.request(express.json());
app.request(express.urlencoded({ extended: true }));

app.listen(PORT, () => console.log(`El servidor esta escuchando en el: ${PORT}`))