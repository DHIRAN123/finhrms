import { app } from './app.js'; // Assuming app.js exports your Express app instance
import connectDB from './db/connectDb.js';

const startServer = async () => {
    try {
        await connectDB(); // Connect to MongoDB

        const port = 8000; // Hardcoded port number

        app.listen(port, () => {
            console.log(`Server is running at http://localhost:${port}`);
        });
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

startServer();
