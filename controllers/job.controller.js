const { Job } = require("../modals/job.modals");


// post jobs
exports.postJob = async (req, res, next) => {
// console.log(req.body);
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
      //  console.log(allJob);
        return res.status(200).send(allJob);

    }
    catch (err) {
    console.log(err);
    return res.status(500).send("Error");
  }
}


// edit job
exports.editJob = async (req, res, next) => {
console.log("object");
  const { id } = req.params
  console.log(id);

    try {
 
    
        return res.status(200).send(allJob);

    }
    catch (err) {
    console.log(err);
    return res.status(500).send("Error");
  }
}


// delete job
exports.deleteJob = async (req, res, next) => {
  const { id } = req.params

    try {
      const data = await Job.deleteOne({_id:id})
      // console.log(data);
    
        return res.status(200).send(data);

    }
    catch (err) {
    console.log(err);
    return res.status(500).send("Error");
  }
}