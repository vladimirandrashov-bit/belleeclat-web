export default function LogoIcon({
  size = 40,
  color = "currentColor",
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size * 1.25}
      viewBox="0 0 80 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Letter b — serif style */}
      <text
        x="4"
        y="78"
        fontFamily="'Cormorant Garamond', 'Times New Roman', serif"
        fontSize="88"
        fontWeight="400"
        fill={color}
        opacity="0.95"
      >
        b
      </text>

      {/* Laurel branch — path drawn to match logo */}
      <g transform="translate(36, 4)" opacity="0.9" fill={color}>
        {/* Branch stem */}
        <path d="M22 44 Q18 32 14 20 Q10 10 6 2" stroke={color} strokeWidth="1.2" fill="none" strokeLinecap="round"/>
        {/* Leaves along the branch */}
        <ellipse cx="20" cy="40" rx="5" ry="2.5" transform="rotate(-30 20 40)" />
        <ellipse cx="18" cy="34" rx="5" ry="2.5" transform="rotate(-40 18 34)" />
        <ellipse cx="16" cy="28" rx="5" ry="2.5" transform="rotate(-50 16 28)" />
        <ellipse cx="13" cy="22" rx="4.5" ry="2.2" transform="rotate(-55 13 22)" />
        <ellipse cx="10" cy="16" rx="4" ry="2" transform="rotate(-60 10 16)" />
        <ellipse cx="8" cy="11" rx="3.5" ry="1.8" transform="rotate(-65 8 11)" />
        <ellipse cx="6" cy="6" rx="3" ry="1.5" transform="rotate(-70 6 6)" />
        {/* Right side leaves */}
        <ellipse cx="24" cy="38" rx="4.5" ry="2.2" transform="rotate(20 24 38)" />
        <ellipse cx="21" cy="32" rx="4.5" ry="2.2" transform="rotate(15 21 32)" />
        <ellipse cx="19" cy="26" rx="4" ry="2" transform="rotate(10 19 26)" />
        <ellipse cx="16" cy="20" rx="3.5" ry="1.8" transform="rotate(5 16 20)" />
        <ellipse cx="12" cy="14" rx="3" ry="1.5" transform="rotate(0 12 14)" />
        <ellipse cx="9" cy="9" rx="2.8" ry="1.4" transform="rotate(-5 9 9)" />
      </g>
    </svg>
  );
}
