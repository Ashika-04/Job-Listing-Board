import React, { useState } from "react";
import "../styles/AdminPanel.css";

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("jobs");

  const jobListings = [
    { id: 1, title: "Software Engineer", company: "Google", status: "Approved" },
    { id: 2, title: "Data Analyst", company: "Microsoft", status: "Pending" },
  ];

  const users = [
    { id: 1, name: "John Doe", role: "Job Seeker", status: "Active" },
    { id: 2, name: "Jane Smith", role: "Employer", status: "Suspended" },
  ];

  const reports = [
    { id: 1, jobTitle: "Frontend Developer", reason: "Inappropriate content" },
  ];

  return (
    <div className="admin-panel">
      <aside className="sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li
            className={activeTab === "jobs" ? "active" : ""}
            onClick={() => setActiveTab("jobs")}
          >
            Manage Job Listings
          </li>
          <li
            className={activeTab === "users" ? "active" : ""}
            onClick={() => setActiveTab("users")}
          >
            Manage Users
          </li>
          <li
            className={activeTab === "reports" ? "active" : ""}
            onClick={() => setActiveTab("reports")}
          >
            Reported Jobs
          </li>
          <li
            className={activeTab === "analytics" ? "active" : ""}
            onClick={() => setActiveTab("analytics")}
          >
            Site Analytics
          </li>
        </ul>
      </aside>

      <main className="content">
        {activeTab === "jobs" && (
          <section>
            <h3>Manage Job Listings</h3>
            <table>
              <thead>
                <tr>
                  <th>Job Title</th>
                  <th>Company</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {jobListings.map((job) => (
                  <tr key={job.id}>
                    <td>{job.title}</td>
                    <td>{job.company}</td>
                    <td>{job.status}</td>
                    <td>
                      <button className="approve">Approve</button>
                      <button className="reject">Reject</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}

        {activeTab === "users" && (
          <section>
            <h3>Manage Users</h3>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.role}</td>
                    <td>{user.status}</td>
                    <td>
                      <button className="suspend">Suspend</button>
                      <button className="delete">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}

        {activeTab === "reports" && (
          <section>
            <h3>Reported Jobs</h3>
            <table>
              <thead>
                <tr>
                  <th>Job Title</th>
                  <th>Reason</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {reports.map((report) => (
                  <tr key={report.id}>
                    <td>{report.jobTitle}</td>
                    <td>{report.reason}</td>
                    <td>
                      <button className="review">Review</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}

        {activeTab === "analytics" && (
          <section>
            <h3>Site Analytics</h3>
            <p>Total Jobs Posted: 120</p>
            <p>Total Users: 500</p>
            <p>Active Employers: 100</p>
            <p>Job Seekers: 400</p>
          </section>
        )}
      </main>
    </div>
  );
};

export default AdminPanel;
