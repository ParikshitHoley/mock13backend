const express = require("express")
const { postJob, getJob } = require("../controllers/job.controller")

const jobRouter = express.Router()


// post job

jobRouter.post("/addJob", postJob)

// get all job
jobRouter.post("/getJob", getJob)

module.exports = {
    jobRouter
}