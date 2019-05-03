var socket = io();

var params = new URLSearchParams(window.location.search);

if (!params.has('nombre') || !params.has('sala')) {
    window.location = 'index.html';
    throw new Error('El nombre y la sala son necesarios');
}

var usuario = {
    nombre: params.get('nombre'),
    sala: params.get('sala')
}

//on -> escuchar información
socket.on('connect', function() {
    console.log('Conectado con el servidor');

    socket.emit('entrarChat', usuario, function(res) {
        console.log('Usuarios conectados', res);
    });


});

socket.on('disconect', function() {
    console.log('Perdimos Conexion con el servidor');
});

socket.on('crearMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
})

socket.on('crearMensaje', function(mensaje) {
    console.log(mensaje);
})

//enviar información
// socket.emit('crearMensaje', {
//     usuario: 'Manuel',
//     mensaje: 'Hola mundo'
// }, function(res) {
//     console.log(res)
// })

//Escuchar cambios de usuario
// Cuando un usuario entra o sale del chat

socket.on('listaPersona', function(personas) {
    console.log(personas);
});

// Mensaje privado
socket.on('mensajePrivado', function(mensaje) {
    console.log('Mensaje privado', mensaje);
})