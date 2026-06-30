import SimplePage from "../components/SimplePage";

export default function PricingPage() {
  return (
    <SimplePage
      eyebrow="Pricing"
      title="Pick the workspace that fits your pace."
      description="Start free while building, then upgrade when you need more projects, team access, and integration capacity."
      cards={[
        {
          title: "Starter",
          body: "Free access for trying Aurvix tools, creating an account, and exploring core workflows.",
          href: "/login",
          action: "Start Free",
        },
        {
          title: "Pro",
          body: "For creators and freelancers who need more saved workflows, templates, and exports.",
          href: "/login",
          action: "Choose Pro",
        },
        {
          title: "Team",
          body: "For teams that need shared workspace controls, API projects, and collaboration.",
          href: "/contact",
          action: "Contact Sales",
        },
      ]}
    />
  );
}
