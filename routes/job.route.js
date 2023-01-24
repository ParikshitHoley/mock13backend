const express = require("express")
const { postJob, getJob,editJob,deleteJob } = require("../controllers/job.controller")

const jobRouter = express.Router()


// post job

jobRouter.post("/addJob", postJob)

// get all job
jobRouter.post("/getJob", getJob)

jobRouter.patch("/editJob", editJob)


// delete  job
jobRouter.delete("/delete/:id", deleteJob)

module.exports = {
    jobRouter
}