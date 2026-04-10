import { Metadata } from "next";
import { THESIS_SECTIONS } from "@/data/thesis";

export const metadata: Metadata = { title: "Investment Thesis" };

export default function ThesisPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">
          Photonic AI Investment Thesis
        </h1>
        <p className="text-muted text-sm mt-1">
          Long-form analysis of the Silicon Photonics investment opportunity in
          the AI infrastructure buildout.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-8 items-start">
        {/* Article */}
        <div className="space-y-6">
          {THESIS_SECTIONS.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="bg-surface border border-border rounded-lg p-6"
            >
              <h2 className="text-white font-bold text-lg mb-4 leading-snug">
                {section.title}
              </h2>
              <div className="space-y-3">
                {section.body.split("\n\n").map((para, i) => (
                  <p
                    key={i}
                    className="text-white/75 text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: para.replace(
                        /\*\*(.*?)\*\*/g,
                        '<strong class="text-white">$1</strong>'
                      ),
                    }}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Sticky ToC */}
        <aside className="hidden lg:block sticky top-20">
          <div className="bg-surface border border-border rounded-lg p-4">
            <p className="text-muted text-xs uppercase tracking-wide font-medium mb-3">
              Contents
            </p>
            <nav className="space-y-1">
              {THESIS_SECTIONS.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="block text-sm text-muted hover:text-accent transition-colors py-1 border-l-2 border-transparent hover:border-accent pl-3"
                >
                  {section.title.split(":")[0].replace(/^The /, "")}
                </a>
              ))}
            </nav>

            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-xs text-muted">
                <strong className="text-white">Disclaimer:</strong> This is
                research commentary, not financial advice. All investments
                carry risk.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
