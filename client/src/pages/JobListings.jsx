import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/JobListings.css";

const JobListings = () => {
  // Dummy job data (Replace with API fetch logic)
  const jobs = [
    {
      id: 1,
      title: "Software Engineer",
      company: "Tech Solutions",
      location: "New York, USA",
      salary: "$80,000 - $100,000",
      jobType: "Full-Time",
      description: "Develop scalable web applications using React and Node.js.",
      logo: "https://source.unsplash.com/100x100/?technology,company",
    },
    {
      id: 2,
      title: "Data Analyst",
      company: "Data Insights",
      location: "San Francisco, USA",
      salary: "$70,000 - $90,000",
      jobType: "Remote",
      description: "Analyze business data to provide insights and trends.",
      logo: "https://source.unsplash.com/100x100/?data,analytics",
    },
    {
      id: 3,
      title: "Product Manager",
      company: "Innovate Inc.",
      location: "Chicago, USA",
      salary: "$90,000 - $120,000",
      jobType: "Hybrid",
      description: "Lead product development teams and drive strategy.",
      logo: "https://source.unsplash.com/100x100/?business,management",
    },
  ];

  // Filter state
  const [filters, setFilters] = useState({
    location: "",
    jobType: "",
  });

  // Handle filter changes
  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  // Filtered job listings
  const filteredJobs = jobs.filter((job) => {
    return (
      (filters.location === "" || job.location.includes(filters.location)) &&
      (filters.jobType === "" || job.jobType === filters.jobType)
    );
  });

  return (
    <div className="job-listings-container">
      <h1 className="page-title">Job Listings</h1>

      {/* Filter Section */}
      <div className="filters">
        <input
          type="text"
          name="location"
          placeholder="Search by location"
          value={filters.location}
          onChange={handleFilterChange}
        />
        <select name="jobType" value={filters.jobType} onChange={handleFilterChange}>
          <option value="">All Job Types</option>
          <option value="Full-Time">Full-Time</option>
          <option value="Part-Time">Part-Time</option>
          <option value="Remote">Remote</option>
          <option value="Hybrid">Hybrid</option>
        </select>
      </div>

      {/* Job Listings */}
      <div className="job-cards">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div key={job.id} className="job-card">
              <img src={job.logo} alt={job.company} className="company-logo" />
              <h2>{job.title}</h2>
              <p className="company-name">{job.company}</p>
              <p className="job-location">{job.location}</p>
              <p className="salary">{job.salary}</p>
              <span className="job-type">{job.jobType}</span>
              <p className="description">{job.description}</p>
              <Link to={`/job/${job.id}`} className="view-details">View Details</Link>
            </div>
          ))
        ) : (
          <p className="no-results">No jobs found. Try different filters.</p>
        )}
      </div>
    </div>
  );
};

export default JobListings;
