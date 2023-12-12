const mysql = require('mysql');
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const port = 3001;
const ip = 'localhost';
app.use('/img', express.static('img'));
const conexion = mysql.createConnection({
    host: "localhost",
    database: "bdescuela",
    user: "root",
    password: "admin", // contraseña de ustedes
});
conexion.connect(function (err) {
    if (err) {
        throw err; // eanuda la ejecución de un generador al lanzar un error en éste y regresar un objeto con las dos propiedades done y value
    } else {
        console.log("Conexión exitosa")
    }  
});
app.use(express.json()); // analiza el cuerpo de las solicitudes HTTP q contirnr datos de formato JSON en una solicitud POST : analiza los dattosq y lo convierten en objeto 
app.use(cors());
app.use(express.urlencoded({ extended: false })); // Este middleware se utiliza para analizar el cuerpo de las solicitudes HTTP que contienen datos codificados en formato x-www-form-urlencoded. Esto es utilizado cuando los datos se envían desde formularios HTML. Similar al middleware express.json(), este middleware analiza los datos y los convierte en un objeto JavaScript accesible a través de req.body. La opción `{ extendida

app.get("/", function (req, res) {
    var filePath = path.join(__dirname, "./index.html");
    res.sendFile(filePath);  // dirname == representa el directorio actual del archivo
});

app.get("/index.js", function (req, res) {
    var filePath = path.join(__dirname, "./index.js");
    res.sendFile(filePath);  // dirname == representa el directorio actual del archivo
});

app.get("/data.js", function (req, res) {
    var filePath = path.join(__dirname, "./data.js");
    res.sendFile(filePath);  // dirname == representa el directorio actual del archivo
});


app.get("/style.css", function (req, res) {
    var filePath = path.join(__dirname, "./style.css");
    res.sendFile(filePath);  // dirname == representa el directorio actual del archivo
});



app.listen(port, function () {
    console.log(`El servidor está funcionando en http://localhost:${port}`);
});














