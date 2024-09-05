import { promises as fs } from "fs";
import path from "path";

export default async function HtmlReader() {
  const filePath = path.join(process.cwd(), "public", "files/cv.html");
  const htmlContent = await fs.readFile(filePath, "utf8");

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}
