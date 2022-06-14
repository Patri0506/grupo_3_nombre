const express = require("express");
const app = express();

const path = require("path");
const methodOverride = require('method-override');

const mainRouter = require('./src/routes/mainRouter'); // Rutas main
const userRouter = require('./src/routes/userRouter'); // Rutas main
const productos = require ("./src/routes/productsRouter");
const borcegos = require ("./src/routes/borcegosRouter");
const zapatillas = require ("./src/routes/zapatillasRouter");
const botas = require ("./src/routes/botasRouter")

app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, '/src/views'));

app.use(express.static(path.join(__dirname, '../public'))); 
app.use(express.urlencoded({ extended: false })); 
app.use(express.json()); 
app.use(methodOverride('_method'));

app.use('/', mainRouter);
app.use('/', userRouter);
app.use("/productos", productos);
app.use("/borcegos", borcegos);
app.use("/zapatillas", zapatillas);
app.use("/botas",botas);

app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000")});
