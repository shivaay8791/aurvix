import SimplePage from "../components/SimplePage";

export default function TemplatesPage() {
  return (
    <SimplePage
      eyebrow="Workflow templates"
      title="Start with proven automation patterns."
      description="Use templates to launch common Aurvix workflows faster, then customize each one for your brand, team, or client."
      cards={[
        {
          title: "Hiring Pack",
          body: "Resume builder, cover email, portfolio QR, and PDF export flow for candidates.",
          href: "/tools/resume-builder",
          action: "Use Template",
        },
        {
          title: "Client Onboarding",
          body: "Invoice draft, welcome email, document merge, and shared workspace checklist.",
          href: "/tools/invoice-generator",
          action: "Open Flow",
        },
        {
          title: "Marketing Kit",
          body: "QR campaign asset, compressed images, and AI email announcement drafts.",
          href: "/tools/qr-code-generator",
          action: "Build Kit",
        },
      ]}
    />
  );
}
