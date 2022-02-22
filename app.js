const express= require('express');
const app= express();


const http = require ('http');
const server = http.createServer(app);

const {Server, Socket}= require('socket.io');
const io=new Server(server);

// io.on('connection',(socket)=>{
//     console.log('un usuario c a conectado')

io.on('connection',(socket)=>{
    
    
    // socket.on('chat',(msg)=>{
    //     console.log('mensaje:'+msg);

    socket.on('chat',(msg)=>{
        io.emit('chat',msg)
    })
    })

app.get('/',(req,res)=>{
    res.sendFile(`${__dirname}/cliente/index.html`)
    
})

server.listen(3000,()=>{
    console.log('servidor corriendo en http://localhost:3000')
})



