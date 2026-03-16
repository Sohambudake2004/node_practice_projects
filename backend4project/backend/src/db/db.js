const mongoose = require("mongoose");

async function connectDB(){

    await mongoose.connect("mongodb://test-yt:cmr9NgmBCgWsgJRG@ac-zydj7ne-shard-00-00.mdl6dez.mongodb.net:27017,ac-zydj7ne-shard-00-01.mdl6dez.mongodb.net:27017,ac-zydj7ne-shard-00-02.mdl6dez.mongodb.net:27017/project-1?ssl=true&replicaSet=atlas-bj7we4-shard-0&authSource=admin")

    console.log("Connect to DB")
}

module.exports = connectDB;