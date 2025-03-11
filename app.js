// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Creación del array para almacenar los nombres de los amigos
let listaDeAmigos = [];

//Implementación de la función para agregar un nuevo nombre de amigo a el array listaDeAmigos

function agregarAmigo(){
    //Se conecta el elemento input que contendrá cada nombre de amigos a JavaScript a través del DOM almacenandolo en una variable objeto
    let input = document.getElementById("amigo");

    //Se almacena el texto del input en una variable llamada nombreAmigo
    let nombreAmigo = input.value;

    //Se valida que el campo de texto no esté vacío y se utiliza return para que se detenga la ejecución del código en caso de que el campo esté vacío. En caso de que no esté vacío se inserta el nombre capturado a la lista de amigos e inmediátamente se limpia el campo de entrada.
    if(nombreAmigo === ""){
        alert("Por favor, inserte un nombre");
        return;
    }else{
        listaDeAmigos.push(nombreAmigo);
        input.value = "";
    }

    //
}console.log(listaDeAmigos);
