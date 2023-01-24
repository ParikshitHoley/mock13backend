const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const { connection } = require("./config/db.js")
const { userRouter } = require("./routes/user.route")
const { jobRouter } = require("./routes/job.route.js")



dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())



// routes
app.use("/user", userRouter)
app.use("/job",jobRouter)






const port = process.env.PORT || 3001



app.listen(port, () => {
   connection()
       console.log(`listening to port ${port}`);
})