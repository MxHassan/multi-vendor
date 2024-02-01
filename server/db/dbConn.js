const { default: mongoose } = require('mongoose')
require('dotenv').config()


const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI)
    // .then((data) => {
    //   console.log(`DB host: ${data.connection.host}`)
    // })
  } catch (error) {
    console.log(error)
  }
}
module.exports = connectDB
