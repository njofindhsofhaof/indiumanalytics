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
    handle: "@stojanovic_vlad",
    platform: "Twitter",
    url: "https://twitter.com/stojanovic_vlad",
    affiliation: "UC Berkeley",
    focus: "SiPh integrated circuits, co-design",
    why: "Pioneer of CMOS-photonics co-design; co-founded Ayar Labs",
  },
  {
    name: "Michal Lipson",
    handle: "@MichalLipson",
    platform: "Twitter",
    url: "https://twitter.com/MichalLipson",
    affiliation: "Columbia University",
    focus: "Nonlinear photonics, on-chip optical interconnects",
    why: "Foundational SiPh research; 30k+ citations; key reference for platform fundamentals",
  },
  {
    name: "Rajeev Ram",
    handle: "@rajeevram_mit",
    platform: "Twitter",
    url: "https://twitter.com/rajeevram_mit",
    affiliation: "MIT",
    focus: "Photonic microsystems, optical I/O",
    why: "Key MIT POEM group — optical I/O roadmaps for AI chips",
  },
  {
    name: "SiPh Weekly",
    handle: "SiPh Weekly Newsletter",
    platform: "Substack",
    url: "https://siphweekly.substack.com",
    affiliation: "Independent",
    focus: "Silicon photonics industry news and analysis",
    why: "Best newsletter for SiPh market moves, product launches, and M&A activity",
  },
  {
    name: "Jock McKinlay",
    handle: "@jockmckinlay",
    platform: "Twitter",
    url: "https://twitter.com/jockmckinlay",
    affiliation: "Lightmatter",
    focus: "Photonic computing, AI inference",
    why: "CEO of Lightmatter — photonic AI compute at the frontier",
  },
  {
    name: "Dario Gil",
    handle: "@dariogil",
    platform: "Twitter",
    url: "https://twitter.com/dariogil",
    affiliation: "IBM Research",
    focus: "Quantum + classical photonics roadmaps",
    why: "IBM SVP R&D — important for photonics in post-CMOS and quantum computing context",
  },
  {
    name: "Photonic Frontiers",
    handle: "Photonic Frontiers Newsletter",
    platform: "Substack",
    url: "https://photonicfrontiers.substack.com",
    affiliation: "Independent",
    focus: "CPO, datacenter photonics, supply chain",
    why: "Weekly deep-dives on CPO commercialization timelines and hyperscaler capex trends",
  },
  {
    name: "Mark Wade",
    handle: "@markwade_photon",
    platform: "Twitter",
    url: "https://twitter.com/markwade_photon",
    affiliation: "Ayar Labs",
    focus: "Optical I/O chiplets, TeraPHY",
    why: "Chief Photonics Architect at Ayar Labs — leads optical I/O chiplet standardization work",
  },
];
