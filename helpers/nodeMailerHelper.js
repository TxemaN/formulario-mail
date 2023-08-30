const nodemailer = require("nodemailer")

const enviar = nodemailer.createTransport({

service:"Gmail", 
auth: {
    user: process.env.User,
    pass: process.env.EMAIL_PASSWORD

}

})



module.exports = {
    enviar
};