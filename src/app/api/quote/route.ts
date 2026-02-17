import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // The Google Apps Script Web App URL
    // You will need to add this to your .env.local or production variables
    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SHEETS_WEBAPP_URL;

    if (!GOOGLE_SCRIPT_URL) {
      console.error("GOOGLE_SHEETS_WEBAPP_URL is not defined");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 },
      );
    }

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    return NextResponse.json(result);
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json(
      { error: "Failed to submit request" },
      { status: 500 },
    );
  }
}
