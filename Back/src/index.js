import app from './app.js';
import {connectDB} from './db.js';

connectDB()
const PORT = 4000
const server = app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

server.on('error', (error) => {
    if (error.syscall !== 'listen') {
        throw error;
    }

    // Start the server on port 3001
    const nextServer = app.listen(4001, () => {
        const nextPort = nextServer.address().port;
        console.log(`Server listening on port ${nextPort}`);
    });
});