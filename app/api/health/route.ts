import { NextResponse } from "next/server";
import { getHealthStatus } from "@/lib/http/health";

export function GET() {
  const health = getHealthStatus();
  return NextResponse.json(health, {
    headers: { "Cache-Control": "no-store" },
  });
}