const exp = require('express');
const socketio = require('socket.io');
const http = require('http');
const cors = require('cors');

const {addUser, removeUser, getUser, getUserInRoom} = require('./user');

const PORT = process.env.PORT || 5000;

const router = require('./router');

const app = exp();
const server = http.createServer(app);
const io =  socketio(server);

io.on('connection' , (socket) =>{
    console.log('New Connection');

    socket.on('join', ({name, room},callback) => {

        const {error, user} = addUser({id: socket.id, name, room});

        if(error) return callback(error);

        socket.join(user.room);

        socket.emit('message', {user: 'admin', text: `${user.name}, Welcome to the room ${user.room}`});
        socket.broadcast.to(user.room).emit('message', {user: 'admin', text: `${user.name} joined the room!!!`});
        
        io.to(user.room).emit("roomData",{room:user.room, users:  getUserInRoom(user.room)});
        callback();
    });

    socket.on('sendMessage',(message,callback) => {
        const user = getUser(socket.id);
        io.to(user.room).emit('message', {user:user.name, text: message});

        callback();
    });


    socket.on('disconnect', () =>{
        console.log('User disconnected');
        const user = removeUser(socket.id);
        if(user) {
            io.to(user.room).emit('message', {user: 'admin', text:`${user.name} has left the room !!!`});
            io.to(user.room).emit("roomData",{room:user.room, users: getUserInRoom(user.room) });
        }
    });

});

app.use(router);
app.use(cors);
server.listen(PORT,() => console.log(`Sever up and running`));