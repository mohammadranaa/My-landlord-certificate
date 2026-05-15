import { NextResponse } from "next/server";
import { getStaffList, ServiceM8Error } from "@/lib/servicem8";

/**
 * GET /api/test-servicem8
 *
 * Verifies the ServiceM8 integration is working (mock or real).
 * Shows which mode is active and returns the staff list.
 *
 * Remove or add authentication before going to production.
 */
export async function GET() {
  const isMock =
    process.env.SERVICEM8_MOCK_MODE === "true" ||
    !process.env.SERVICEM8_ACCESS_TOKEN ||
    process.env.SERVICEM8_ACCESS_TOKEN === "your_token_here";

  try {
    const staff = await getStaffList();

    return NextResponse.json({
      ok: true,
      mode: isMock ? "mock" : "real",
      message: isMock
        ? "Running in mock mode — no real API calls made"
        : "ServiceM8 connection successful",
      staff_count: staff.length,
      staff: staff.map((s) => ({
        uuid: s.uuid,
        name: [s.first, s.last].filter(Boolean).join(" "),
        email: s.email,
        mobile: s.mobile,
      })),
    });
  } catch (err) {
    if (err instanceof ServiceM8Error) {
      return NextResponse.json(
        {
          ok: false,
          mode: isMock ? "mock" : "real",
          error: err.message,
          status_code: err.statusCode,
        },
        { status: err.statusCode === 401 ? 401 : 502 },
      );
    }
    return NextResponse.json(
      { ok: false, mode: isMock ? "mock" : "real", error: String(err) },
      { status: 500 },
    );
  }
}
