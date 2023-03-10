const mongoose = require("mongoose")
require('dotenv').config()
mongoose.set('strictQuery', false)
const connection = async () => {
    await mongoose.connect(process.env.mongoUrl)
}
module.exports = {
    connection
}
