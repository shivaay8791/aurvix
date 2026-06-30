"use client";

import ToolFormPage from "../ToolFormPage";

export default function QrCodeGeneratorPage() {
  return (
    <ToolFormPage
      eyebrow="QR code generator"
      title="Create QR-ready content."
      description="Prepare the link, label, and campaign note for a QR asset."
      fields={[
        { label: "Destination URL", placeholder: "https://aurvix.app/profile" },
        { label: "QR label", placeholder: "Portfolio QR" },
        {
          label: "Campaign note",
          placeholder: "Used on resume footer and business card",
          type: "textarea",
        },
      ]}
      resultTitle="QR preview data"
      buildResult={(values) =>
        `Label: ${values["QR label"] || "Untitled QR"}\nURL: ${
          values["Destination URL"] || "Add a destination URL"
        }\nNote: ${values["Campaign note"] || "No campaign note yet"}`
      }
    />
  );
}
