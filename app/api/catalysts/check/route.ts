import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { getActiveCatalysts, UPCOMING_CATALYSTS } from "@/data/thesis";

export async function GET(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const active = getActiveCatalysts();
  const expiredCount = UPCOMING_CATALYSTS.length - active.length;
  const needsManualReview = active.length < 3;

  if (expiredCount > 0) {
    console.warn(
      `[catalysts/check] ${expiredCount} catalyst(s) expired and now hidden from Dashboard.`
    );
  }
  if (needsManualReview) {
    console.warn(
      `[catalysts/check] Only ${active.length} active catalyst(s) left — data/thesis.ts UPCOMING_CATALYSTS needs a manual refresh with newly verified dates.`
    );
  }

  revalidatePath("/");

  return NextResponse.json({
    checkedAt: new Date().toISOString(),
    activeCount: active.length,
    expiredCount,
    needsManualReview,
  });
}
