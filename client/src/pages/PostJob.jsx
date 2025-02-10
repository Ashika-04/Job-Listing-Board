import React, { useState } from "react";
import "../styles/PostJob.css";

const PostJob = () => {
  const [jobData, setJobData] = useState({
    title: "",
    company: "",
    location: "",
    jobType: "Full-time",
    salary: "",
    description: "",
    requirements: "",
    logo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData({ ...jobData, [name]: value });
  };

  const handleFileChange = (e) => {
    setJobData({ ...jobData, logo: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Job Posted:", jobData);
    alert("Job successfully posted!");
  };

  return (
    <div className="post-job-container">
      <h2>Post a Job</h2>
      <form onSubmit={handleSubmit} className="post-job-form">
        <label>Job Title:</label>
        <input type="text" name="title" value={jobData.title} onChange={handleChange} required />

        <label>Company Name:</label>
        <input type="text" name="company" value={jobData.company} onChange={handleChange} required />

        <label>Location:</label>
        <input type="text" name="location" value={jobData.location} onChange={handleChange} required />

        <label>Job Type:</label>
        <select name="jobType" value={jobData.jobType} onChange={handleChange}>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Remote">Remote</option>
          <option value="Contract">Contract</option>
        </select>

        <label>Salary (Optional):</label>
        <input type="text" name="salary" value={jobData.salary} onChange={handleChange} />

        <label>Job Description:</label>
        <textarea name="description" value={jobData.description} onChange={handleChange} required />

        <label>Requirements:</label>
        <textarea name="requirements" value={jobData.requirements} onChange={handleChange} required />

        <label>Company Logo (Optional):</label>
        <input type="file" accept="image/*" onChange={handleFileChange} />

        <button type="submit">Post Job</button>
      </form>
    </div>
  );
};

export default PostJob;
