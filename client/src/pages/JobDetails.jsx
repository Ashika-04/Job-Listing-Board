import React from "react";
import { useParams } from "react-router-dom";
import "../styles/JobDetails.css";

const JobDetails = () => {
  // Dummy job details for demonstration (replace with actual API data)
  const job = {
    id: 1,
    title: "Software Engineer",
    company: "Tech Solutions",
    location: "New York, USA",
    salary: "$80,000 - $100,000",
    jobType: "Full-Time",
    description:
      "We are looking for a passionate Software Engineer to design and develop scalable applications.",
    responsibilities: [
      "Develop high-quality software design and architecture.",
      "Identify, prioritize, and execute tasks in the software development life cycle.",
      "Collaborate with team members and stakeholders.",
    ],
    requirements: [
      "Bachelor’s degree in Computer Science or relevant field.",
      "2+ years of experience in software development.",
      "Strong knowledge of JavaScript, React.js, and Node.js.",
    ],
    companyInfo:
      "Tech Solutions is a leading IT company focused on innovation and technology.",
    logo: "https://source.unsplash.com/100x100/?technology,company",
  };

  return (
    <div className="job-details-container">
      {/* Job Header Section */}
      <div className="job-header">
        <img src={job.logo} alt={job.company} className="company-logo" />
        <div>
          <h1>{job.title}</h1>
          <h3>{job.company}</h3>
          <p>{job.location}</p>
          <p className="salary">{job.salary}</p>
          <span className="job-type">{job.jobType}</span>
        </div>
      </div>

      {/* Job Description Section */}
      <section className="job-description">
        <h2>Job Description</h2>
        <p>{job.description}</p>
      </section>

      {/* Responsibilities Section */}
      <section className="job-responsibilities">
        <h2>Responsibilities</h2>
        <ul>
          {job.responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Requirements Section */}
      <section className="job-requirements">
        <h2>Requirements</h2>
        <ul>
          {job.requirements.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Company Information */}
      <section className="company-info">
        <h2>About the Company</h2>
        <p>{job.companyInfo}</p>
      </section>

      {/* Job Actions */}
      <div className="job-actions">
        <button className="apply-button">Apply Now</button>
        <button className="save-button">Save Job</button>
      </div>
    </div>
  );
};

export default JobDetails;
