import { type ExpertAccount } from "@/data/experts";
import { FileText, Globe, ExternalLink, MessageCircle, Users } from "lucide-react";

const PLATFORM_ICONS = {
  Twitter: MessageCircle,
  Substack: FileText,
  LinkedIn: Users,
  Blog: Globe,
};

const PLATFORM_COLORS = {
  Twitter: "text-sky-400",
  Substack: "text-orange-400",
  LinkedIn: "text-blue-400",
  Blog: "text-muted",
};

export default function ExpertCard({ expert }: { expert: ExpertAccount }) {
  const Icon = PLATFORM_ICONS[expert.platform];
  const iconColor = PLATFORM_COLORS[expert.platform];

  return (
    <a
      href={expert.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-surface border border-border rounded-lg p-4 hover:border-accent/40 transition-colors group"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-white font-semibold group-hover:text-accent transition-colors truncate">
            {expert.name}
          </p>
          <p className="text-accent text-sm mt-0.5">{expert.handle}</p>
        </div>
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <Icon size={15} className={iconColor} />
          <ExternalLink size={11} className="text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>

      <p className="text-muted text-xs mt-1.5 font-medium">{expert.affiliation}</p>
      <p className="text-sm mt-2 text-white/75 line-clamp-2">{expert.focus}</p>
      <p className="text-xs text-muted mt-2 italic line-clamp-2">{expert.why}</p>
    </a>
  );
}
