const express=require("express")
const app = express();
const nodemailer = require("nodemailer")
require("dotenv").config


const port=3000

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))
// parse application/json
app.use(express.json())




app.use("/", require("./routes/correoRoute"));

// MANTENER PUERTO A LA ESCUCHA
app.listen(port, () => {
    console.log(`servidor front a la escucha del puerto ${port}`);
});
