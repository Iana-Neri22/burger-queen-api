const express = require("express");
const app = express();
const db = require('./models/index');
var port = 5000

app.listen(4567, console.log("Servidor rodando"));

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use("/users", require("./routes/user"));
app.use("/orders", require("./routes/orders"));
app.use('/products', require('./routes/products'));

db.sequelize.sync();