
//Creo una variable fuera del bucle para almacenar las notas agregadas
let ultimaNota = null;  // Variable para almacenar la última nota fuera del bucle

// Bucle principal

while (true) {
    //Pido al usuario que ingrese la opcion que desea realizar
    let opcion = Number(prompt('¿Qué quieres hacer? \n 1) Agregar 2) Mostrar última nota 3) Editar 4) Eliminar 0) Salir'));
    
    // Verifico que haya ingresado un número
    while (isNaN(opcion) || opcion < 0 || opcion > 4) {
        opcion = Number(prompt("Por favor, ingresa una Opción Correcta \n 1) Agregar 2) Mostrar última nota 3) Editar 4) Eliminar 0) Salir"));
    }

    if (opcion == 1) {
        //Remplazo la ultima nota por la nota agregada
        ultimaNota = agregarNota();
        alert("Nota agregada:\n" + ultimaNota.titulo + "\n" + ultimaNota.contenido);
    } else if (opcion == 2) {
        //Muestro lo que este en la variable ultima nota
        mostrarUltimaNota();
    } else if (opcion == 3) {
        //Reemplazo la variable ultima nota por la nota nueva editada de la funcion editar nota si no tiene nota pasa al else que dice que no se realiza una edicion
        ultimaNota = editarNota(ultimaNota);
        if (ultimaNota) {
            alert("Nota editada:\n" + ultimaNota.titulo + "\n" + ultimaNota.contenido);
        } else {
            alert("No se realizó ninguna edición.");
        }
    } else if (opcion == 4) {
        //Elimino lo que este en la variable eliminar nota no importa si fue editada o no
        eliminarNota();
    } else if (opcion == 0) {
        //Si oprime 0 se hace el break del while y sale del ciclo
        break;
    } else {
        //Si ingresa un numero incorrecto le sale un cartel solicitando un numero correcto
        alert("Por favor, ingresa una Opción Correcta \n 1) Agregar 2) Mostrar última nota 3) Editar 4) Eliminar 0) Salir");
    }
}


//------------------------------FUNCIONES---------------------------------

function agregarNota() {
    //Pido al usuario un titulo y una nota para agregar esto se va a almacenar en la variable ultima nota
    let tituloNota = prompt("¿Cuál es el título de la nota que quieres agregar?").toUpperCase();
    let notaAgregada = prompt("Escribe tu nota:");

    return { titulo: tituloNota, contenido: notaAgregada };
}

function mostrarUltimaNota() {
    //Si no hay una nota en la variable ultima nota aparece un cartel diciendo que no hay notas para mostrar
    //Si hay algo en la variable nota lo muestra atraves de un alert
    if (ultimaNota == null) {
        alert("No hay notas para mostrar.");
    } else {
        alert("Última nota:\n" + ultimaNota.titulo + "\n" + ultimaNota.contenido);
    }
}

function editarNota(nota) {
    //Primero se fija si en la variable ultima nota hay algo agregado o no
    //Si no lo hay pregunta si quiere agregar algo ,si decide que si llama a la funcion agregar, si dice que no vulve al bucle while 
    if (nota == null) {
        //Entro en un ciclo while para asegurarme que el usuario ingrese si o no 
        while (true) {
        let respuesta = prompt("No hay notas para editar. ¿Desea agregar una nueva nota? (Sí/No)").toLowerCase();
            if (respuesta == 'si') {
                return agregarNota();
            } else if (respuesta == 'no') {
                return null;
            } else {
                alert("Ingrese una opcion correcta SI o NO");
            }   
        }
    }
    
    let nuevaNota = agregarNota();  // Solicitar la nueva información de la nota con la funcion agregar nota llamandola
    return nuevaNota;//Devolver la nota editada
}

function eliminarNota() {
    //Si en la variable ultima nota no hay nada aparece un cartel no hay notas para eliminar 
    //Si hay algo en la variable ultimanota ultima nota pasa a ser null que seria que no hay nada en la variable
    if (ultimaNota == null) {
        alert("No hay notas para eliminar.");
    } else {
        alert("Nota eliminada:\n" + ultimaNota.titulo + "\n" + ultimaNota.contenido);
        ultimaNota = null;  // Establecer la última nota como nula
    }
}
