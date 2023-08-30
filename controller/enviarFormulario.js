
const nodemailer = require("nodemailer")


const rellenarFormulario = async (req, res) => {



    res.render("formulario.ejs")

}

const enviarFormulario = async (req, res) => {
    
    const { cuerpoMensaje, correoUsuario, motivo } = req.body

    const body = {
        cuerpoMensaje,
        correoUsuario,
        motivo
    }
   

    const transporter = nodemailer.createTransport({
        service: "Hotmail",
        

        auth: {
            user: `pruebanode1983@hotmail.com`,
            pass: `Bridge123*`,
        },

    });



    transporter.sendMail({
        

        to: "testbridgemadrid@outlook.com",
        subject: body.motivo,
        text: body.cuerpoMensaje 
       
        
    });





    res.render("formulario.ejs")
    console.log(body.cuerpoMensaje)

}


module.exports = {

    rellenarFormulario,
    enviarFormulario
}