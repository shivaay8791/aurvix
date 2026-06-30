"use client";

import { useState } from "react";
export default function ResumeForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [skills, setSkills] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">

      {/* Left Side Form */}

      <div
        style={{
          background: "#1e293b",
          padding: "30px",
          borderRadius: "20px",
          color: "white",
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          Resume Details
        </h2>

        <p
          style={{
            color: "#cbd5e1",
            marginBottom: "30px",
          }}
        >
          Fill your information to generate a professional ATS-friendly
          resume.
        </p>

       <input
  type="text"
  placeholder="Full Name"
  value={fullName}
  onChange={(e) => setFullName(e.target.value)}
  style={inputStyle}
/>

        
          <input
          type="email"
          placeholder="Email"
            value={email}
              onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
/>
        

        <input
        type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={inputStyle}
      />
{/* Education */}
<h3
  style={{
    fontSize: "24px",
    fontWeight: "bold",
    marginTop: "20px",
    marginBottom: "10px",
  }}
>
  Education
</h3>

<textarea
  rows={4}
  placeholder="Education (Example: B.Tech CSE - AKTU - 2026)"
  value={education}
  onChange={(e) => setEducation(e.target.value)}
  style={inputStyle}
/>

{/* Skills */}
<h3
  style={{
    fontSize: "24px",
    fontWeight: "bold",
    marginTop: "20px",
    marginBottom: "10px",
  }}
>
  Skills
</h3>

<textarea
  rows={5}
  placeholder="Skills (CCNA, Linux, Networking...)"
  value={skills}
  onChange={(e) => setSkills(e.target.value)}
  style={inputStyle}
/>Experience

<textarea
  rows={5}
  placeholder="Experience (Example: Network Engineer - ABC Pvt Ltd - 2 Years)"
  value={experience}
  onChange={(e) => setExperience(e.target.value)}
  style={inputStyle}
/>
      <h3
  style={{
    fontSize: "24px",
    fontWeight: "bold",
    marginTop: "20px",
    marginBottom: "10px",
  }}
></h3>

<button
  style={{
    width: "100%",
    background: "#06b6d4",
    color: "white",
    border: "none",
    padding: "16px",
    borderRadius: "12px",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "20px",
  }}
>
  <h3
  style={{
    fontSize: "24px",
    fontWeight: "bold",
    marginTop: "20px",
    marginBottom: "10px",
  }}
>
</h3> 
  Generate Resume
</button>

</div>

{/* Right Side Resume Preview */}

<div
  style={{
    background: "#ffffff",
    width: "100%",
    maxWidth: "700px",
    minHeight: "500px",
    padding: "30px",
    borderRadius: "16px",
    color: "#111827",
    boxShadow: "0 15px 40px rgba(0,0,0,.15)",
    margin: "0 auto",
  }}
>
  <h2
    style={{
      fontSize: "30px",
      fontWeight: "bold",
      marginBottom: "20px",
    }}
  >
    Resume Preview
  </h2>

  <hr />

  <h1
    style={{
      marginTop: "30px",
      fontSize: "42px",
      color: "#111827",
    }}
  >
    {fullName || "Your Name"}
  </h1>

  <p style={{ color: "#6b7280" }}>
    {email || "your@email.com"}
  </p>

  <p style={{ color: "#6b7280" }}>
    {phone || "+91 9876543210"}
  </p>

  {/* Education Preview */}
  <div style={{ marginTop: "40px" }}>
    <h3
      style={{
        fontSize: "24px",
        fontWeight: "bold",
      }}
    >
      Education
    </h3>

    <p
      style={{
        marginTop: "15px",
        lineHeight: "30px",
        color: "#374151",
        whiteSpace: "pre-wrap",
      }}
    >
      {education || "Your Education"}
    </p>
  </div>

  {/* Skills Preview */}
  <div style={{ marginTop: "40px" }}>
    <h3
      style={{
        fontSize: "24px",
        fontWeight: "bold",
      }}
    >
      Skills
    </h3>

    <p
      style={{
        marginTop: "15px",
        lineHeight: "30px",
        color: "#374151",
        whiteSpace: "pre-wrap",
      }}
    >
      {skills || "CCNA\nLinux\nNetworking"}



      {/* Experience Preview */}
<div style={{ marginTop: "40px" }}>
  <h3
    style={{
      fontSize: "24px",
      fontWeight: "bold",
    }}
  >
    Experience
  </h3>

  <p
    style={{
      marginTop: "15px",
      lineHeight: "30px",
      color: "#374151",
      whiteSpace: "pre-wrap",
    }}
  >
    {experience || "Your Experience"}
  </p>
</div>
    </p>
  </div>



      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "15px",
  marginBottom: "20px",
  borderRadius: "10px",
  border: "1px solid #334155",
  background: "#0f172a",
  color: "white",
  fontSize: "16px",
} as React.CSSProperties;