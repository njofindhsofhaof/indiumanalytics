import NavLinks from "./NavLinks";
import { Zap } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="border-b border-border bg-surface sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 gap-4">
          <div className="flex items-center gap-2 flex-shrink-0">
            <Zap size={18} className="text-accent" />
            <span className="text-accent font-bold text-lg tracking-tight">
              Photonic Analytics
            </span>
          </div>
          <NavLinks />
        </div>
      </div>
    </nav>
  );
}
