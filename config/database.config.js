const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://dmnhuta25068_db_user:0772109065@cluster0.r8rtpze.mongodb.net/?appName=Cluster0/users_db');
        console.log('Kết nối MongoDB thành công');
    } catch (err) {
        console.error('Lỗi kết nối MongoDB:', err);
        process.exit(1);
    }
};

module.exports = connectDB;