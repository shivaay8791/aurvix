export default function Stats() {
  const stats = [
    { label: "Total AI Workflows", number: "15+", description: "Professional Tools" },
    { label: "AI Service Uptime", number: "99.98%", description: "High Availability" },
    { label: "Enterprise Customizations", number: "700k+", description: "Active Integrations" },
    { label: "Unique Users Secured", number: "2.5M+", description: "Verified Profiles" },
  ];

  return (
    /* Deep dark blue-black page background with a subtle radial gradient glow */
    <section className="relative w-full bg-[#050716] bg-[radial-gradient(circle_at_50%_-20%,rgba(99,102,241,0.15),transparent_60%)] px-4 py-20 overflow-hidden">
      
      {/* Absolute positioning element to simulate the purple/blue blur behind the stats card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[250px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Main glassmorphism card container matching the screenshot color and opacity */}
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 rounded-2xl border border-white/[0.08] bg-[#0d1127]/40 backdrop-blur-xl p-8 text-center shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
        {stats.map((item, index) => (
          <div
            key={item.label}
            className={`flex flex-col justify-center py-2 px-4 relative
              ${/* Muted vertical divider lines */ ''}
              ${index !== stats.length - 1 ? 'md:border-r md:border-white/[0.08]' : ''}
              ${/* Mobile spacing and top borders */ ''}
              ${index !== 0 ? 'border-t border-white/[0.08] md:border-t-0 mt-4 pt-6 md:mt-0 md:py-2' : ''}
            `}
          >
            {/* Label: Slightly warm, muted grey text */}
            <p className="text-[13px] tracking-wide font-normal text-slate-400 mb-2">
              {item.label}
            </p>
            
            {/* Number: Striking pure white text with tight tracking */}
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight my-1">
              {item.number}
            </h2>

            {/* Description: Light slate grey text */}
            <p className="text-[13px] tracking-wide font-normal text-slate-400 mt-2">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}