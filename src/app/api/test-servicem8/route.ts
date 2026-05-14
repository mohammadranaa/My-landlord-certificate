import { NextResponse } from "next/server";
import { getStaffList, ServiceM8Error } from "@/lib/servicem8";

/**
 * GET /api/test-servicem8
 *
 * Fetches the staff list from ServiceM8 to verify the Bearer token
 * and network connectivity are working. Remove or protect this route
 * before going to production.
 */
export async function GET() {
  try {
    const staff = await getStaffList();
    return NextResponse.json({
      ok: true,
      message: "ServiceM8 connection successful",
      staff_count: staff.length,
      staff: staff.map((s) => ({
        uuid: s.uuid,
        name: [s.first, s.last].filter(Boolean).join(" "),
        email: s.email,
      })),
    });
  } catch (err) {
    if (err instanceof ServiceM8Error) {
      return NextResponse.json(
        { ok: false, error: err.message, status_code: err.statusCode },
        { status: err.statusCode === 401 ? 401 : 502 },
      );
    }
    return NextResponse.json(
      { ok: false, error: String(err) },
      { status: 500 },
    );
  }
}
