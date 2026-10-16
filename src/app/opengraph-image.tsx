import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "My Landlord Certificate — EICR, Gas Safety, EPC & More";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #0093DB 0%, #006da3 100%)",
          fontFamily: "Inter, system-ui, sans-serif",
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <div
            style={{
              fontSize: "48px",
              fontWeight: 800,
              color: "#ffffff",
              textAlign: "center",
              lineHeight: 1.2,
            }}
          >
            My Landlord Certificate
          </div>
          <div
            style={{
              fontSize: "24px",
              fontWeight: 500,
              color: "rgba(255,255,255,0.9)",
              textAlign: "center",
              lineHeight: 1.5,
            }}
          >
            EICR · Gas Safety · EPC · Fire Risk Assessment · PAT Testing
          </div>
          <div
            style={{
              display: "flex",
              gap: "32px",
              marginTop: "16px",
            }}
          >
            {["NICEIC Approved", "Gas Safe Registered", "Fixed Prices"].map(
              (badge) => (
                <div
                  key={badge}
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#1F2937",
                    background: "#80D100",
                    padding: "8px 20px",
                    borderRadius: "8px",
                  }}
                >
                  {badge}
                </div>
              ),
            )}
          </div>
          <div
            style={{
              fontSize: "18px",
              color: "rgba(255,255,255,0.7)",
              marginTop: "8px",
            }}
          >
            www.mylandlordcertificate.co.uk
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
