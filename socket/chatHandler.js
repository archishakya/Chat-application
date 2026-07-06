const setupSocketHandlers = (io) => {
  io.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    // Handle sending messages
    socket.on('send_message', async (data) => {
      try {
        const { message, receiverId, roomId, senderId } = data;
        
        // Save message to database logic here
        // const newMessage = new Message({ ... });
        // await newMessage.save();

        // Emit to specific user or room
        if (receiverId) {
          socket.to(receiverId).emit('receive_message', {
            message: message,
            senderId: senderId,
            timestamp: new Date()
          });
        }

        if (roomId) {
          socket.to(roomId).emit('receive_message', {
            message: message,
            senderId: senderId,
            timestamp: new Date()
          });
        }

      } catch (error) {
        console.error('Error sending message:', error);
        socket.emit('error', { message: 'Failed to send message' });
      }
    });

    // Handle typing indicators
    socket.on('typing_start', (data) => {
      const { receiverId, roomId } = data;

      if (receiverId) {
        socket.to(receiverId).emit('user_typing', {
          userId: socket.user?._id,
          username: socket.user?.username
        });
      }

      if (roomId) {
        socket.to(roomId).emit('user_typing', {
          userId: socket.user?._id,
          username: socket.user?.username
        });
      }
    });

    // Handle typing stop
    socket.on('typing_stop', (data) => {
      const { receiverId, roomId } = data;

      if (receiverId) {
        socket.to(receiverId).emit('user_stop_typing', {
          userId: socket.user?._id
        });
      }

      if (roomId) {
        socket.to(roomId).emit('user_stop_typing', {
          userId: socket.user?._id
        });
      }
    });

    // Handle join room
    socket.on('join_room', (roomId) => {
      socket.join(roomId);
      console.log(`User ${socket.id} joined room: ${roomId}`);
    });

    // Handle leave room
    socket.on('leave_room', (roomId) => {
      socket.leave(roomId);
      console.log(`User ${socket.id} left room: ${roomId}`);
    });

    // Handle disconnect
    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
    });
  });
};

module.exports = setupSocketHandlers;