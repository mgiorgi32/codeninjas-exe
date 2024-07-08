// function mailto(){
//     var nombre = document.getElementById('validationTooltip01').value;
//     var apellido = document.getElementById('validationTooltip02').value;
//     var email = document.getElementById('inputEmail4').value;
//     var destino = document.getElementById('validationTooltip04').value;
//     var presupuesto = document.getElementById('validationTooltip05').value;
//     var cuerpoCorreo = "Nombre: " + nombre + "\n";
//     cuerpoCorreo += "Apellido: " + apellido + "\n";
//     cuerpoCorreo += "Email: " + email + "\n";
//     cuerpoCorreo += "Destino: " + destino + "\n";
//     cuerpoCorreo += "Presupuesto: $" + presupuesto + "\n";
//     window.location.href = "mailto:codeninjas827@gmali.com?subject=Solicitud de Viaje&body=" + encodeURIComponent(cuerpoCorreo);
// }
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('reservaForm').addEventListener('submit', function(event) {
        event.preventDefault();
        event.stopPropagation();

        var form = event.target;
        var nombre = document.getElementById('validationTooltip01').value.trim();
        var apellido = document.getElementById('validationTooltip02').value.trim();
        var email = document.getElementById('inputEmail4').value.trim();
        var destino = document.getElementById('validationTooltip04').value.trim();
        var presupuesto = document.getElementById('validationTooltip05').value.trim();

        if (!nombre || !apellido || !email || !destino || !presupuesto) {
            alert("No se puede enviar el formulario. Por favor, completa todos los campos.");
        } else {
            var cuerpoCorreo = "Nombre: " + nombre + "\n";
            cuerpoCorreo += "Apellido: " + apellido + "\n";
            cuerpoCorreo += "Email: " + email + "\n";
            cuerpoCorreo += "Destino: " + destino + "\n";
            cuerpoCorreo += "Presupuesto: $" + presupuesto + "\n";

            window.location.href = "mailto:codeninjas827@gmail.com?subject=Solicitud de Viaje&body=" + encodeURIComponent(cuerpoCorreo);
        }
    });
});

function volver(){
    window.open("index.html")
}