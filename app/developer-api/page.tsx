import SimplePage from "../components/SimplePage";

export default function DeveloperApiPage() {
  return (
    <SimplePage
      eyebrow="Developer API"
      title="Connect Aurvix tools to your own product."
      description="Plan API-powered workflows for documents, generated content, and team automation from one clean developer surface."
      cards={[
        {
          title: "Authentication",
          body: "Use your Aurvix account session to manage API projects and access keys.",
          href: "/login",
          action: "Sign In",
        },
        {
          title: "Workflow Endpoints",
          body: "Design endpoints around resume generation, PDF processing, QR assets, and email drafts.",
          href: "/integration-guide",
          action: "Read Guide",
        },
        {
          title: "Project Setup",
          body: "Create a workspace, choose tools, test requests, and ship your first integration.",
          href: "/integrate",
          action: "Integrate",
        },
      ]}
      primaryHref="/integration-guide"
      primaryLabel="Docs"
    />
  );
}
