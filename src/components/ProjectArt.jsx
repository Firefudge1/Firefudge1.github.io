/**
 * Placeholder hero art, one motif per project.
 * To swap in a real photo: import the image and return an <img> from the
 * matching case in ProjectArt below.
 */

const common = {
  viewBox: '0 0 100 100',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

function CornerSensorArt() {
  return (
    <svg {...common} aria-hidden="true">
      <rect x="18" y="18" width="64" height="64" rx="6" />
      <rect x="41" y="41" width="18" height="18" rx="2" />
      <path d="M50 41V26M50 59v15M41 50H26M59 50h15" />
      <path d="M32 32h9M59 32h9M32 68h9M59 68h9" opacity="0.55" />
      <circle cx="26" cy="26" r="2.5" fill="currentColor" stroke="none" />
      <circle cx="74" cy="26" r="2.5" fill="currentColor" stroke="none" />
      <circle cx="26" cy="74" r="2.5" fill="currentColor" stroke="none" />
      <circle cx="74" cy="74" r="2.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

function HarnessArt() {
  return (
    <svg {...common} aria-hidden="true">
      <path d="M14 50h22" />
      <path d="M36 50c10 0 10-22 20-22h12" />
      <path d="M36 50h16" />
      <path d="M36 50c10 0 10 22 20 22h10" />
      <circle cx="14" cy="50" r="4" />
      <circle cx="68" cy="28" r="4" />
      <circle cx="52" cy="50" r="4" />
      <circle cx="66" cy="72" r="4" />
      <path d="M72 28h10M56 50h12M70 72h10" opacity="0.55" />
      <path d="M36 46v8" opacity="0.55" />
    </svg>
  )
}

function DischargeArt() {
  return (
    <svg {...common} aria-hidden="true">
      <rect x="16" y="22" width="68" height="56" rx="5" />
      <rect x="26" y="34" width="10" height="20" rx="1.5" />
      <rect x="42" y="34" width="10" height="20" rx="1.5" />
      <rect x="58" y="34" width="10" height="20" rx="1.5" />
      <path d="M26 64h42" opacity="0.55" />
      <path d="M52 24 44 44h8l-6 16" strokeWidth="2.4" />
    </svg>
  )
}

function InputModuleArt() {
  return (
    <svg {...common} aria-hidden="true">
      <rect x="36" y="38" width="28" height="24" rx="3" />
      <path d="M50 38V22M36 50H20M64 50h16M50 62v16" />
      <circle cx="50" cy="18" r="4" />
      <circle cx="16" cy="50" r="4" />
      <circle cx="84" cy="50" r="4" />
      <circle cx="50" cy="82" r="4" />
      <path d="M42 46h16M42 54h10" opacity="0.55" />
    </svg>
  )
}

function CrossMediumArt() {
  return (
    <svg {...common} aria-hidden="true">
      <path d="M22 80V64l16-14 14 8" />
      <circle cx="22" cy="80" r="4" fill="currentColor" stroke="none" />
      <circle cx="38" cy="50" r="3.5" />
      <path d="m52 58 10-9" />
      <rect x="58" y="38" width="12" height="12" rx="2" transform="rotate(-18 64 44)" />
      <path d="M30 30c14-10 32-8 44 4" strokeDasharray="4 5" opacity="0.7" />
      <path d="M74 34v6h-6" opacity="0.7" />
      <path d="M16 88h68" opacity="0.45" />
    </svg>
  )
}

function FrcArt() {
  return (
    <svg {...common} aria-hidden="true">
      <rect x="24" y="40" width="52" height="34" rx="4" />
      <circle cx="36" cy="80" r="6" />
      <circle cx="64" cy="80" r="6" />
      <path d="M34 40V26h32v14" />
      <path d="M42 52h16M42 62h10" opacity="0.55" />
      <path d="M50 26V16" />
      <circle cx="50" cy="13" r="3" fill="currentColor" stroke="none" />
    </svg>
  )
}

const art = {
  'corner-sensor-module': CornerSensorArt,
  'vehicle-harness': HarnessArt,
  'discharge-board': DischargeArt,
  'input-module': InputModuleArt,
  'cross-medium-learning': CrossMediumArt,
  'frc-8576': FrcArt,
}

export default function ProjectArt({ id }) {
  const Art = art[id]
  return Art ? <Art /> : null
}
