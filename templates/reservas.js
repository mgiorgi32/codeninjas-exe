 function mailto(){
     var nombre = document.getElementById('validationTooltip01').value;
     var apellido = document.getElementById('validationTooltip02').value;
     var email = document.getElementById('inputEmail4').value;
     var destino = document.getElementById('validationTooltip04').value;
     var presupuesto = document.getElementById('validationTooltip05').value;
     var cuerpoCorreo = "Nombre: " + nombre + "\n";
     cuerpoCorreo += "Apellido: " + apellido + "\n";
     cuerpoCorreo += "Email: " + email + "\n";
     cuerpoCorreo += "Destino: " + destino + "\n";
     cuerpoCorreo += "Presupuesto: $" + presupuesto + "\n";
     window.location.href = "mailto:codeninjas827@gmali.com?subject=Solicitud de Viaje&body=" + encodeURIComponent(cuerpoCorreo);
}
// function mailto() {
//     var nombre = document.getElementById('validationTooltip01').value;
//     var apellido = document.getElementById('validationTooltip02').value;
//     var email = document.getElementById('inputEmail4').value;
//     var destino = document.getElementById('validationTooltip04').value;
//     var presupuesto = document.getElementById('validationTooltip05').value;
//     if (nombre === '' || apellido === '' || email === '' || destino === '' || presupuesto === '') {
//         alert('Por favor, complete todos los campos antes de enviar el formulario.');
//     } else {
//         window.location.href = "mailto:codeninjas827@gmali.com?subject=Solicitud de Viaje&body=" + encodeURIComponent(cuerpoCorreo);
//         alert('Formulario enviado con éxito.'); 
//     }
// }
// function mailto() {
//     var nombre = document.getElementById('validationTooltip01').value;
//     var apellido = document.getElementById('validationTooltip02').value;
//     var email = document.getElementById('inputEmail4').value;
//     var destino = document.getElementById('validationTooltip04').value;
//     var presupuesto = document.getElementById('validationTooltip05').value;

//     // Verificar campos vacíos
//     if (nombre === '' || apellido === '' || email === '' || destino === '' || presupuesto === '') {
//         alert('Por favor, complete todos los campos antes de enviar el formulario.');
//     } else {
//         // Construir el cuerpo del correo electrónico
//         var cuerpoCorreo = 'Nombre: ' + nombre + '\n';
//         cuerpoCorreo += 'Apellido: ' + apellido + '\n';
//         cuerpoCorreo += 'Email: ' + email + '\n';
//         cuerpoCorreo += 'Destino: ' + destino + '\n';
//         cuerpoCorreo += 'Presupuesto: ' + presupuesto + '\n';

//         // Enviar datos al backend usando Ajax
//         var xhr = new XMLHttpRequest();
//         xhr.open('POST', 'tu_backend_de_envio_de_correo', true);
//         xhr.setRequestHeader('Content-Type', 'application/json');
//         xhr.onreadystatechange = function() {
//             if (xhr.readyState === XMLHttpRequest.DONE) {
//                 if (xhr.status === 200) {
//                     alert('Formulario enviado con éxito.');
//                     // Puedes redirigir o hacer cualquier acción adicional aquí después de enviar el correo
//                 } else {
//                     alert('Hubo un problema al enviar el formulario. Por favor, inténtelo más tarde.');
//                 }
//             }
//         };
        
//         // Enviar los datos del formulario como JSON al backend
//         xhr.send(JSON.stringify({
//             nombre: nombre,
//             apellido: apellido,
//             email: email,
//             destino: destino,
//             presupuesto: presupuesto
//         }));
//     }
// }
// const express = require('express');
// const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(bodyParser.json());

// app.post('/enviar-correo', (req, res) => {
//     const { nombre, apellido, email, destino, presupuesto } = req.body;

//     // Configurar nodemailer para enviar el correo
//     let transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: 'tu_correo@gmail.com',
//             pass: 'tu_contraseña'
//         }
//     });

//     // Configurar el contenido del correo
//     let mailOptions = {
//         from: 'tu_correo@gmail.com',
//         to: 'destinatario@example.com',
//         subject: 'Solicitud de Viaje',
//         text: `
//             Nombre: ${nombre}
//             Apellido: ${apellido}
//             Email: ${email}
//             Destino: ${destino}
//             Presupuesto: ${presupuesto}
//         `
//     };

//     // Enviar el correo electrónico
//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             console.log(error);
//             res.status(500).send('Error al enviar el correo electrónico.');
//         } else {
//             console.log('Correo enviado: ' + info.response);
//             res.status(200).send('Correo enviado con éxito.');
//         }
//     });
// });

// app.listen(PORT, () => {
//     console.log(`Servidor iniciado en el puerto ${PORT}`);
// });


function volver(){
    window.open("index.html")
}