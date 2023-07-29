import { NextResponse } from "next/server";

export function GET() {
  let a = 0;
  setTimeout(() => {
    a++;
  }, 0);
  return NextResponse.json({ hellp: "kjabjkjbdshj", value: a });
}
