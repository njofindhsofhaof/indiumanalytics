"use client";

import { useEffect, useRef } from "react";
import { STOCK_METADATA, type StockMeta } from "@/data/stocks";

const SECTOR_COLORS: Record<string, string> = {
  Semiconductors: "#6366f1",
  Photonics: "#22d3ee",
  "Optical Manufacturing": "#f59e0b",
  Networking: "#10b981",
  Materials: "#f97316",
  Foundry: "#a78bfa",
};

function getColor(sector: string) {
  return SECTOR_COLORS[sector] ?? "#94a3b8";
}

export default function CompanyMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<unknown>(null);

  useEffect(() => {
    if (mapRef.current || !containerRef.current) return;

    let map: ReturnType<typeof import("leaflet").map> | undefined;

    async function init() {
      const L = (await import("leaflet")).default;

      // Fix default icon paths broken by webpack
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });

      map = L.map(containerRef.current!, {
        center: [30, -30],
        zoom: 2,
        zoomControl: true,
        scrollWheelZoom: false,
      });

      mapRef.current = map;

      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
          maxZoom: 19,
        }
      ).addTo(map);

      STOCK_METADATA.forEach((stock: StockMeta) => {
        const color = getColor(stock.sector);

        const icon = L.divIcon({
          className: "",
          html: `<div style="
            width:12px;height:12px;
            border-radius:50%;
            background:${color};
            border:2px solid rgba(255,255,255,0.8);
            box-shadow:0 0 8px ${color}99;
          "></div>`,
          iconSize: [12, 12],
          iconAnchor: [6, 6],
        });

        const popup = L.popup({ className: "company-popup" }).setContent(`
          <div style="min-width:200px;font-family:inherit">
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
              <span style="font-family:monospace;font-weight:700;font-size:14px;color:${color}">${stock.symbol}</span>
              <span style="font-size:11px;color:#94a3b8;background:#1e293b;padding:1px 6px;border-radius:4px">${stock.sector}</span>
            </div>
            <div style="font-weight:600;font-size:13px;color:#f1f5f9;margin-bottom:4px">${stock.name}</div>
            <div style="font-size:11px;color:#64748b;margin-bottom:8px">📍 ${stock.hq}</div>
            <div style="font-size:11px;color:#94a3b8;line-height:1.5">${stock.thesis}</div>
          </div>
        `);

        L.marker([stock.lat, stock.lng], { icon }).addTo(map!).bindPopup(popup);
      });
    }

    init();

    return () => {
      if (map) map.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <div className="bg-surface border border-border rounded-lg overflow-hidden">
      <div className="px-4 py-3 border-b border-border flex flex-col sm:flex-row sm:items-center gap-3">
        <div className="flex-1">
          <h2 className="text-sm font-semibold text-white">Company HQ Locations</h2>
          <p className="text-xs text-muted mt-0.5">Click a marker to see details</p>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-1.5">
          {Object.entries(SECTOR_COLORS).map(([sector, color]) => (
            <div key={sector} className="flex items-center gap-1.5">
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: color }}
              />
              <span className="text-xs text-muted">{sector}</span>
            </div>
          ))}
        </div>
      </div>
      <div ref={containerRef} style={{ height: 480 }} />
    </div>
  );
}
