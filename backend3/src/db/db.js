const mongoose = require("mongoose");


async function connectDB() {
    try {
        await mongoose.connect("mongodb://test-yt:cmr9NgmBCgWsgJRG@ac-zydj7ne-shard-00-00.mdl6dez.mongodb.net:27017,ac-zydj7ne-shard-00-01.mdl6dez.mongodb.net:27017,ac-zydj7ne-shard-00-02.mdl6dez.mongodb.net:27017/halley?ssl=true&replicaSet=atlas-bj7we4-shard-0&authSource=admin") //here hally is the name of database
        console.log("Connected to DB")
    } catch (err) {
        console.error("DB connection failed:", err.message)
        process.exit(1)
    }
    
}

module.exports = connectDB  