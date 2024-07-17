import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb+srv://Dhiran:Dhiren007@dhiran.e6pii2f.mongodb.net/?retryWrites=true&w=majority&appName=altaneoHrms';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MONGODB_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;
