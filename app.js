// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []; // Crea la lista de amigos a sortear

let miButon = document.getElementById("button1"); // Guarda la referencia del botón añadir
let miButon2 = document.getElementById("button2"); // Guarda la referencia del boton sortear
let listaAmigos = document.getElementById('listaAmigos'); // Guarda la referencia de la lista de amigos
let amigo = document.getElementById("input"); // Guarda la referencia del input
let resultado = document.getElementById('resultado'); // Guarda la referencia a la segunda lista

function agregarAmigo(){

    let nombre = amigo.value.trim()
    if (nombre === ""){
        alert('Por favor, ingresa un nombre valido');
        return;
    }

    amigos.push(nombre)

    let li = document.createElement("li");
    li.textContent = nombre;
    listaAmigos.appendChild(li);

    amigo.value = '';
    resultado.innerHTML = '';


}

function sortearAmigo(){
    if(amigos.length===0){
        alert('Debes añadir por lo menos un amigo para sortear');
        return;
    }
    const numeroAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[numeroAleatorio];

   
    let li2 = document.createElement('li');
    li2.textContent = "El amigo secreto sorteado es: " + amigoSecreto;
    resultado.appendChild(li2);

    amigos = [];
    listaAmigos.innerHTML='';
}

miButon.addEventListener('click', agregarAmigo);
miButon2.addEventListener('click', sortearAmigo);
