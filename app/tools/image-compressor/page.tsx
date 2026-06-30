"use client";

import ToolFormPage from "../ToolFormPage";

export default function ImageCompressorPage() {
  return (
    <ToolFormPage
      eyebrow="Image compressor"
      title="Estimate image compression."
      description="Enter an image name and target size to prepare optimized assets for faster pages."
      fields={[
        { label: "Image name", placeholder: "hero-banner.png" },
        { label: "Current size KB", placeholder: "1200", type: "number" },
        { label: "Target size KB", placeholder: "450", type: "number" },
      ]}
      resultTitle="Compression target"
      buildResult={(values) => {
        const current = Number(values["Current size KB"] || 0);
        const target = Number(values["Target size KB"] || 0);
        const saved = current && target ? Math.max(current - target, 0) : 0;
        return `Image: ${values["Image name"] || "Add an image name"}\nCurrent: ${
          current || "?"
        } KB\nTarget: ${target || "?"} KB\nEstimated savings: ${saved || "?"} KB`;
      }}
    />
  );
}
