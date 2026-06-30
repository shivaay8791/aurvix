import SimplePage from "../components/SimplePage";

export default function ToolsPage() {
  return (
    <SimplePage
      eyebrow="AI tool hub"
      title="Choose a tool and start building."
      description="Aurvix brings everyday AI utilities into one workspace for documents, images, invoices, emails, QR codes, and resume workflows."
      cards={[
        {
          title: "AI Resume Builder",
          body: "Create ATS-friendly resumes with structured sections and a polished builder flow.",
          href: "/tools/resume-builder",
          action: "Generate Resume",
        },
        {
          title: "PDF Merge",
          body: "Prepare multiple PDF files for a clean combined document workflow.",
          href: "/tools/pdf-merge",
          action: "Merge PDFs",
        },
        {
          title: "QR Code Generator",
          body: "Create QR-ready content for links, contact pages, portfolios, and campaigns.",
          href: "/tools/qr-code-generator",
          action: "Create QR",
        },
        {
          title: "Image Compressor",
          body: "Reduce image delivery size before publishing assets to your site or app.",
          href: "/tools/image-compressor",
          action: "Compress",
        },
        {
          title: "AI Email Writer",
          body: "Draft professional outreach, follow-ups, replies, and announcements.",
          href: "/tools/ai-email-writer",
          action: "Write Email",
        },
        {
          title: "Invoice Generator",
          body: "Create clean invoice drafts for client billing and project records.",
          href: "/tools/invoice-generator",
          action: "Generate Invoice",
        },
      ]}
      primaryHref="/account"
      primaryLabel="Account"
    />
  );
}
