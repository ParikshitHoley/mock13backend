const mongoose = require("mongoose")
mongoose.set('strictQuery', false);

const connection = () => {
    mongoose.connect("mongodb+srv://parikshitpatil:Parikshit123@cluster0.4vt0nwr.mongodb.net/?retryWrites=true&w=majority").then((data) => {
       console.log(`connected with server${data.connection.host}`)
    }).catch((err) => {
        console.log(err);
    })
}

module.exports = {
    connection
}