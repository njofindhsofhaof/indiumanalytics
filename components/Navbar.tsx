import NavLinks from "./NavLinks";

export default function Navbar() {
  return (
    <nav className="border-b border-border bg-surface sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 gap-4">
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Lens icon — SVG vì lucide không có lens */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Thân thấu kính hình elip */}
              <ellipse cx="10" cy="10" rx="9" ry="5.5" stroke="#F5C518" strokeWidth="1.6" fill="#F5C518" fillOpacity="0.12" />
              {/* Đường viền ngoài */}
              <ellipse cx="10" cy="10" rx="9" ry="5.5" stroke="#F5C518" strokeWidth="1.6" />
              {/* Đường cong phản chiếu sáng trái */}
              <path d="M3.5 8.5 Q6 6 9 7" stroke="#F5C518" strokeWidth="1.1" strokeLinecap="round" opacity="0.7" />
            </svg>
            <span className="font-bold text-lg tracking-tight" style={{ color: "#F5C518" }}>
              Photonic Analytics
            </span>
          </div>
          <NavLinks />
        </div>
      </div>
    </nav>
  );
}
