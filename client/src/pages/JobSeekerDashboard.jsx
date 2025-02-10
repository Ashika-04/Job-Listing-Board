import React, { useState } from "react";
import "../styles/JobSeekerDashboard.css";

const JobSeekerDashboard = () => {
  const [appliedJobs, setAppliedJobs] = useState([
    { id: 1, title: "Frontend Developer", company: "Google", status: "Pending" },
    { id: 2, title: "Software Engineer", company: "Microsoft", status: "Interview Scheduled" },
  ]);

  const [savedJobs, setSavedJobs] = useState([
    { id: 3, title: "Full Stack Developer", company: "Amazon" },
    { id: 4, title: "Data Scientist", company: "Tesla" },
  ]);

  return (
    <div className="jobseeker-dashboard">
      <h2>Job Seeker Dashboard</h2>

      <div className="dashboard-section">
        <h3>Applied Jobs</h3>
        {appliedJobs.length > 0 ? (
          <ul>
            {appliedJobs.map((job) => (
              <li key={job.id} className="job-item">
                <span className="job-title">{job.title}</span> at <span className="company-name">{job.company}</span>
                <span className={`job-status ${job.status.toLowerCase().replace(" ", "-")}`}>
                  {job.status}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p>No applied jobs yet.</p>
        )}
      </div>

      <div className="dashboard-section">
        <h3>Saved Jobs</h3>
        {savedJobs.length > 0 ? (
          <ul>
            {savedJobs.map((job) => (
              <li key={job.id} className="job-item">
                <span className="job-title">{job.title}</span> at <span className="company-name">{job.company}</span>
                <button className="remove-btn" onClick={() => setSavedJobs(savedJobs.filter((j) => j.id !== job.id))}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No saved jobs yet.</p>
        )}
      </div>

      <div className="dashboard-section">
        <h3>Profile & Resume</h3>
        <p>Upload or update your resume for better job applications.</p>
        <input type="file" className="upload-input" />
        <button className="upload-btn">Upload Resume</button>
      </div>
    </div>
  );
};

export default JobSeekerDashboard;
