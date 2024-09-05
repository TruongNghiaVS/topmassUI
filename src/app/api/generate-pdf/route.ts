import { NextResponse } from "next/server";
import path from "path";
import puppeteer from "puppeteer";
import { promises as fs } from "fs";

export async function GET(request: Request) {
  try {
    const filePath = path.join(process.cwd(), "public", "files/cv.html");
    const htmlContent = await fs.readFile(filePath, "utf8");
    if (!htmlContent) {
      return NextResponse.json(
        { error: "HTML string is required" },
        { status: 400 }
      );
    }

    // Launch Puppeteer
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Set the content of the page to the HTML string
    await page.setContent(htmlContent, { waitUntil: "networkidle0" });

    // Generate the PDF
    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
    });

    // Close the browser
    await browser.close();

    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="document.pdf"',
      },
    });
  } catch (error) {
    console.error("Failed to generate PDF", error);
    return NextResponse.json(
      { error: "Failed to generate PDF" },
      { status: 500 }
    );
  }
}
