import React, { useState } from "react";
import "../styles/Dashboard.css";

const Dashboard = ({ userType }) => {
  const [activeTab, setActiveTab] = useState(userType === "employer" ? "jobs" : "applications");

  // Sample data
  const jobListings = [
    { id: 1, title: "Frontend Developer", applications: 10 },
    { id: 2, title: "Backend Engineer", applications: 5 },
  ];

  const appliedJobs = [
    { id: 1, title: "Software Engineer", company: "Google", status: "Pending" },
    { id: 2, title: "Data Analyst", company: "Microsoft", status: "Accepted" },
  ];

  const savedJobs = [
    { id: 3, title: "UI/UX Designer", company: "Apple" },
  ];

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>Dashboard</h2>
        <ul>
          {userType === "employer" ? (
            <>
              <li className={activeTab === "jobs" ? "active" : ""} onClick={() => setActiveTab("jobs")}>
                My Job Listings
              </li>
              <li className={activeTab === "post" ? "active" : ""} onClick={() => setActiveTab("post")}>
                Post a Job
              </li>
            </>
          ) : (
            <>
              <li className={activeTab === "applications" ? "active" : ""} onClick={() => setActiveTab("applications")}>
                Applied Jobs
              </li>
              <li className={activeTab === "saved" ? "active" : ""} onClick={() => setActiveTab("saved")}>
                Saved Jobs
              </li>
            </>
          )}
          <li className={activeTab === "profile" ? "active" : ""} onClick={() => setActiveTab("profile")}>
            Profile Settings
          </li>
        </ul>
      </aside>

      <main className="content">
        {userType === "employer" && activeTab === "jobs" && (
          <section>
            <h3>My Job Listings</h3>
            <table>
              <thead>
                <tr>
                  <th>Job Title</th>
                  <th>Applications</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {jobListings.map((job) => (
                  <tr key={job.id}>
                    <td>{job.title}</td>
                    <td>{job.applications}</td>
                    <td>
                      <button className="edit">Edit</button>
                      <button className="delete">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}

        {userType === "jobseeker" && activeTab === "applications" && (
          <section>
            <h3>Applied Jobs</h3>
            <table>
              <thead>
                <tr>
                  <th>Job Title</th>
                  <th>Company</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {appliedJobs.map((job) => (
                  <tr key={job.id}>
                    <td>{job.title}</td>
                    <td>{job.company}</td>
                    <td>{job.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}

        {userType === "jobseeker" && activeTab === "saved" && (
          <section>
            <h3>Saved Jobs</h3>
            <table>
              <thead>
                <tr>
                  <th>Job Title</th>
                  <th>Company</th>
                </tr>
              </thead>
              <tbody>
                {savedJobs.map((job) => (
                  <tr key={job.id}>
                    <td>{job.title}</td>
                    <td>{job.company}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}

        {activeTab === "profile" && (
          <section>
            <h3>Profile Settings</h3>
            <form className="profile-form">
              <label>Name:</label>
              <input type="text" placeholder="Enter your name" />

              <label>Email:</label>
              <input type="email" placeholder="Enter your email" />

              <label>Password:</label>
              <input type="password" placeholder="Enter new password" />

              <button type="submit" className="save-btn">Save Changes</button>
            </form>
          </section>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
