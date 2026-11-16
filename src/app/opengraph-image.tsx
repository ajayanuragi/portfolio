import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ background: "#f2efe8", color: "#191916", width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80 }}>
      <div style={{ fontSize: 26, color: "#b73516", marginBottom: 36 }}>PERSONAL PORTFOLIO</div>
      <div style={{ fontSize: 100 }}>{site.name}</div>
      <div style={{ fontSize: 30, marginTop: 36 }}>Projects, ideas, and work in progress.</div>
    </div>,
    size,
  );
}
