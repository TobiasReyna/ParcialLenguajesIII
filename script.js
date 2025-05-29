function enviar() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    var fecha = document.getElementById("fecha").value;
    var dni = document.getElementById("dni").value;

    //validaciones
    if(nombre === "" || apellido === "" || email === "" || fecha === "" || dni === "") {
        alert("Por favor, complete todos los campos.");
        return;
    }

    if(dni< 10000000 || dni > 99999999){
        alert("El DNI debe tener 8 dígitos.");
        return;
    }

    var pregunta1 = prompt("¿Cuál es tu nacionalidad?");
    while(pregunta1 === null || pregunta1.trim() === "") {
        alert("Por favor, ingrese una nacionalidad válida.");
        pregunta1 = prompt("¿Cuál es tu nacionalidad?");
    }
    var pregunta2 = prompt("¿Cuál es tu color favorito?");
    while(pregunta2 === null || pregunta2.trim() === "") {
        alert("Por favor, ingrese un color favorito válido.");
        pregunta2 = prompt("¿Cuál es tu color favorito?");
    }
    var pregunta3 = prompt("¿Cuál es el nombre de tu mascota?");
    while(pregunta3 === null || pregunta3.trim() === "") {
        alert("Por favor, ingrese un nombre de mascota válido.");
        pregunta3 = prompt("¿Cuál es el nombre de tu mascota?");
    }

    // Mostrar respuestas en el documento
    var respuestasDiv = document.getElementById("respuestas");
    respuestasDiv.innerHTML =
        "<h3>Sus respuestas fueron:</h3>" +
        "<ul>" +
        "<li><strong>Nacionalidad:</strong> " + pregunta1 + "</li>" +
        "<li><strong>Color favorito:</strong> " + pregunta2 + "</li>" +
        "<li><strong>Nombre de mascota:</strong> " + pregunta3 + "</li>" +
        "</ul>";
}