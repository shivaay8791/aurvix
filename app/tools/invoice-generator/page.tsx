"use client";

import ToolFormPage from "../ToolFormPage";

export default function InvoiceGeneratorPage() {
  return (
    <ToolFormPage
      eyebrow="Invoice generator"
      title="Create an invoice draft."
      description="Enter client and project details to prepare a clean billing summary."
      fields={[
        { label: "Client name", placeholder: "Acme Studio" },
        { label: "Project", placeholder: "Website redesign" },
        { label: "Amount", placeholder: "25000", type: "number" },
      ]}
      resultTitle="Invoice draft"
      buildResult={(values) =>
        `Invoice To: ${values["Client name"] || "Client"}\nProject: ${
          values["Project"] || "Project name"
        }\nAmount Due: ${values["Amount"] || "0"}\nStatus: Draft ready`
      }
    />
  );
}
