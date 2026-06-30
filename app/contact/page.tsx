import SimplePage from "../components/SimplePage";

export default function ContactPage() {
  return (
    <SimplePage
      eyebrow="Contact"
      title="Talk to Aurvix about your workflow."
      description="Use this page as the contact destination for product questions, team setup, integration help, and custom workflow planning."
      cards={[
        {
          title: "Product Help",
          body: "Get support choosing the right tool or setting up your account.",
          href: "/login",
          action: "Open Account",
        },
        {
          title: "Integration Help",
          body: "Plan API and workflow connections for your app, site, or dashboard.",
          href: "/integrate",
          action: "Start Setup",
        },
        {
          title: "Team Plans",
          body: "Discuss workspace access, shared projects, and collaboration features.",
          href: "/pricing",
          action: "See Pricing",
        },
      ]}
    />
  );
}
