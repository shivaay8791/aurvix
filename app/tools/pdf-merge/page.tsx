"use client";

import ToolFormPage from "../ToolFormPage";

export default function PdfMergePage() {
  return (
    <ToolFormPage
      eyebrow="PDF merge"
      title="Plan a clean PDF merge."
      description="List the files you want to merge and generate an ordered merge plan for your document workflow."
      fields={[
        {
          label: "PDF file names",
          placeholder: "resume.pdf, certificates.pdf, portfolio.pdf",
          type: "textarea",
        },
        {
          label: "Output name",
          placeholder: "complete-application.pdf",
        },
      ]}
      resultTitle="Merge plan"
      buildResult={(values) => {
        const files = values["PDF file names"] || "Add PDF file names above";
        const output = values["Output name"] || "merged-document.pdf";
        return `Input order:\n${files}\n\nOutput:\n${output}\n\nStatus:\nReady to merge when file upload support is connected.`;
      }}
    />
  );
}
