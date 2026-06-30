export default function AurvixLogo() {
  return (
    <div className="flex items-center gap-3">
      <svg
        width="42"
        height="42"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Connecting Lines */}
        <g
          stroke="url(#gradient)"
          strokeWidth="2"
          filter="url(#glow)"
          opacity="0.9"
        >
          <line x1="32" y1="8" x2="12" y2="50" />
          <line x1="32" y1="8" x2="52" y2="50" />
          <line x1="18" y1="35" x2="46" y2="35" />
          <line x1="18" y1="35" x2="12" y2="50" />
          <line x1="46" y1="35" x2="52" y2="50" />
          <line x1="32" y1="8" x2="32" y2="35" />
        </g>

        {/* Nodes */}
        {[
          [32, 8],
          [18, 35],
          [46, 35],
          [12, 50],
          [52, 50],
          [32, 35],
        ].map(([cx, cy], i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r="3"
            fill="url(#gradient)"
            filter="url(#glow)"
          />
        ))}

        {/* Letter A */}
        <path
          d="M32 15 L22 50 M32 15 L42 50 M26 36 H38"
          stroke="url(#gradient)"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#glow)"
        />
      </svg>

      <h1 className="text-3xl font-bold text-white">
        <span className="text-white">Aur</span>
        <span className="text-cyan-400">vix</span>
      </h1>
    </div>
  );
}