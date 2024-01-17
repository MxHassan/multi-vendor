const mongoose = require('mongoose')

if (process.env.NODE_ENV !== 'PRODUCTION') {
  require('dotenv').config({
    path: 'config/.env'
  })
}

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
