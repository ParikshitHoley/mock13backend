const { Job } = require("../modals/job.modals");


// post jobs
exports.postJob = async (req, res, next) => {

    try {
 
        const newJob = new Job(req.body)
        const savedJob = await newJob.save()
        return res.status(200).send("Job successfully saved");

    }
    catch (err) {
    console.log(err);
    return res.status(500).send("Error");
  }
}


// get all jobs

exports.getJob = async (req, res, next) => {

    try {
 
        const allJob = await Job.find().lean().exec();
       console.log(allJob);
        return res.status(200).send(allJob);

    }
    catch (err) {
    console.log(err);
    return res.status(500).send("Error");
  }
}