"use client";

import ToolFormPage from "../ToolFormPage";

export default function AiEmailWriterPage() {
  return (
    <ToolFormPage
      eyebrow="AI email writer"
      title="Draft a professional email."
      description="Describe the goal, recipient, and tone to generate a clean email draft."
      fields={[
        { label: "Recipient", placeholder: "Hiring manager" },
        { label: "Tone", placeholder: "Professional and friendly" },
        {
          label: "Email goal",
          placeholder: "Ask for an interview update after submitting my resume",
          type: "textarea",
        },
      ]}
      resultTitle="Email draft"
      buildResult={(values) =>
        `Subject: Quick follow-up\n\nHi ${values["Recipient"] || "there"},\n\nI hope you are doing well. I wanted to follow up regarding ${
          values["Email goal"] || "my previous message"
        }.\n\nThank you for your time, and I look forward to hearing from you.\n\nBest regards`
      }
    />
  );
}
