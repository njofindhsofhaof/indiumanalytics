const LAYERS = [
  {
    id: "raw",
    label: "Raw Materials",
    color: "border-orange-500/40 bg-orange-500/5",
    labelColor: "text-orange-400",
    items: [
      { name: "InP", note: "Laser substrate · Critical supply" },
      { name: "SiO₂/Si", note: "Waveguide platform · Low risk" },
      { name: "LiNbO₃", note: "Modulator material · High risk" },
      { name: "Germanium", note: "Photodetector · High risk" },
      { name: "GaAs", note: "VCSEL substrate · Medium risk" },
    ],
  },
  {
    id: "substrate",
    label: "Substrate & Wafer Production",
    color: "border-yellow-500/40 bg-yellow-500/5",
    labelColor: "text-yellow-400",
    items: [
      { name: "AXT Inc (AXTI)", note: "InP & GaAs wafers" },
      { name: "Sumitomo Electric", note: "InP substrates (JPN)" },
      { name: "Soitec", note: "Silicon-on-Insulator (FRA)" },
      { name: "Shin-Etsu", note: "SOI wafers (JPN)" },
    ],
  },
  {
    id: "foundry",
    label: "Photonic Foundry",
    color: "border-accent/40 bg-accent/5",
    labelColor: "text-accent",
    items: [
      { name: "Tower Semi (TSEM)", note: "SiPh 300mm platform" },
      { name: "GlobalFoundries (GFS)", note: "45RFSOI SiPh node" },
      { name: "TSMC", note: "SiPh + advanced packaging" },
      { name: "Intel Foundry", note: "Photonic integration layer" },
    ],
  },
  {
    id: "integration",
    label: "Photonic Integration & Packaging",
    color: "border-purple-500/40 bg-purple-500/5",
    labelColor: "text-purple-400",
    items: [
      { name: "Coherent Corp (COHR)", note: "InP lasers + transceivers" },
      { name: "Lumentum (LITE)", note: "EML lasers, ROADMs" },
      { name: "MACOM (MTSI)", note: "III-V analog photonics" },
      { name: "POET Technologies (POET)", note: "Optical interposer" },
      { name: "Fabrinet (FN)", note: "Optical contract mfg." },
    ],
  },
  {
    id: "systems",
    label: "Systems & Hyperscalers",
    color: "border-positive/40 bg-positive/5",
    labelColor: "text-positive",
    items: [
      { name: "Broadcom (AVGO)", note: "CPO switch ASICs" },
      { name: "Marvell (MRVL)", note: "CPO + custom AI silicon" },
      { name: "Google / AWS / Azure", note: "AI datacenter deployment" },
      { name: "Cisco / Juniper", note: "Network systems" },
    ],
  },
];

export default function SupplyChainDiagram() {
  return (
    <div className="space-y-0">
      {LAYERS.map((layer, idx) => (
        <div key={layer.id}>
          {/* Layer card */}
          <div
            className={`border ${layer.color} rounded-lg p-4`}
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-surface border border-border flex items-center justify-center text-muted text-xs font-bold">
                {idx + 1}
              </div>
              <div className="flex-1">
                <h3 className={`font-semibold text-sm mb-3 ${layer.labelColor}`}>
                  {layer.label}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                  {layer.items.map((item) => (
                    <div
                      key={item.name}
                      className="bg-surface border border-border rounded p-2"
                    >
                      <p className="text-white text-xs font-medium">{item.name}</p>
                      <p className="text-muted text-xs mt-0.5">{item.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Arrow between layers */}
          {idx < LAYERS.length - 1 && (
            <div className="flex justify-center py-1">
              <div className="flex flex-col items-center gap-0">
                <div className="w-px h-4 bg-border" />
                <svg width="12" height="7" viewBox="0 0 12 7" fill="none">
                  <path d="M6 7L0 0h12L6 7z" fill="#21262d" />
                </svg>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
