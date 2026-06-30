import SimplePage from "../components/SimplePage";

export default function CommunityPage() {
  return (
    <SimplePage
      eyebrow="Community showcase"
      title="See what builders create with Aurvix."
      description="Explore example workflows for students, freelancers, developers, creators, and teams using Aurvix tools."
      cards={[
        {
          title: "Portfolio Launch",
          body: "A creator pairs a resume, portfolio QR, and compressed project images for a public profile.",
        },
        {
          title: "Agency Operations",
          body: "A small team builds invoices, email drafts, and merged PDFs for repeat client work.",
        },
        {
          title: "Developer Demo",
          body: "A product builder connects Aurvix workflows into a dashboard prototype.",
        },
      ]}
      primaryHref="/integrate"
      primaryLabel="Build Yours"
    />
  );
}
