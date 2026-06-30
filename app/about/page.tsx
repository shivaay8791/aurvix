import SimplePage from "../components/SimplePage";

export default function AboutPage() {
  return (
    <SimplePage
      eyebrow="About Aurvix"
      title="A practical AI workspace for everyday creation."
      description="Aurvix is designed around useful tools people return to: resumes, documents, images, invoices, QR assets, emails, and workflow integrations."
      cards={[
        {
          title: "Fast",
          body: "Every page is built to get users into a working tool quickly.",
        },
        {
          title: "Focused",
          body: "The platform favors practical workflows over clutter and distractions.",
        },
        {
          title: "Expandable",
          body: "New tools and integrations can be added as the product grows.",
        },
      ]}
      primaryHref="/tools"
      primaryLabel="Explore Tools"
    />
  );
}
