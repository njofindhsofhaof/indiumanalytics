export type ExpertPlatform = "Twitter" | "Substack" | "LinkedIn" | "Blog";

export type ExpertAccount = {
  name: string;
  handle: string;
  platform: ExpertPlatform;
  url: string;
  affiliation: string;
  focus: string;
  why: string;
};

export const EXPERTS: ExpertAccount[] = [
  {
    name: "Vladimir Stojanovic",
    handle: "@vnstojan",
    platform: "Twitter",
    url: "https://x.com/vnstojan",
    affiliation: "UC Berkeley",
    focus: "SiPh integrated circuits, co-design",
    why: "Pioneer of CMOS-photonics co-design; co-founded Ayar Labs",
  },
  {
    name: "Michal Lipson",
    handle: "@MichalLipson",
    platform: "Twitter",
    url: "https://x.com/MichalLipson",
    affiliation: "Columbia University",
    focus: "Nonlinear photonics, on-chip optical interconnects",
    why: "Foundational SiPh research; 30k+ citations; key reference for platform fundamentals",
  },
  {
    name: "Rajeev Ram",
    handle: "@rajeevram",
    platform: "Twitter",
    url: "https://x.com/rajeevram",
    affiliation: "MIT",
    focus: "Photonic microsystems, optical I/O",
    why: "Key MIT POEM group — optical I/O roadmaps for AI chips",
  },
  {
    name: "Dario Gil",
    handle: "@dariogil",
    platform: "Twitter",
    url: "https://x.com/dariogil",
    affiliation: "IBM Research",
    focus: "Quantum + classical photonics roadmaps",
    why: "IBM SVP R&D — important for photonics in post-CMOS and quantum computing context",
  },
  {
    name: "Mark Wade",
    handle: "@mark_wade",
    platform: "Twitter",
    url: "https://x.com/mark_wade",
    affiliation: "Ayar Labs",
    focus: "Optical I/O chiplets, TeraPHY",
    why: "Chief Photonics Architect at Ayar Labs — leads optical I/O chiplet standardization work",
  },
  {
    name: "Ron Beaumont",
    handle: "@ron_beaumont",
    platform: "Twitter",
    url: "https://x.com/ron_beaumont",
    affiliation: "Lightmatter",
    focus: "Photonic computing, AI inference",
    why: "CEO of Lightmatter — photonic AI compute at the frontier",
  },
  {
    name: "Photon Capital",
    handle: "@photoncap",
    platform: "Substack",
    url: "https://substack.com/@photoncap",
    affiliation: "Independent",
    focus: "Photonics investing, silicon photonics market analysis",
    why: "Focused investment analysis on photonics stocks and CPO commercialization trends",
  },
  {
    name: "Vikram Skr",
    handle: "@vikramskr",
    platform: "Substack",
    url: "https://substack.com/@vikramskr",
    affiliation: "Independent",
    focus: "Deep tech & semiconductor investing",
    why: "Deep-dive analysis on AI infrastructure and photonic semiconductor supply chain dynamics",
  },
  {
    name: "Crux Capital Group",
    handle: "@cruxcapitalgroup",
    platform: "Substack",
    url: "https://substack.com/@cruxcapitalgroup",
    affiliation: "Crux Capital",
    focus: "Deep tech venture, photonic AI infrastructure",
    why: "Institutional perspective on photonic AI infrastructure investment and market structure",
  },
];
