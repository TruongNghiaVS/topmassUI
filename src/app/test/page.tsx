"use client";

import { useState } from "react";

const DownloadPDFButton = () => {
  const [htmlContent, setHtmlContent] = useState("<h1>Hello, PDF!</h1>");

  const downloadPDF = async () => {
    const response = await fetch("/api/generate-pdf", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "document.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } else {
      console.error("Failed to generate PDF");
    }
  };

  return <button onClick={downloadPDF}>Download PDF</button>;
};

export default DownloadPDFButton;
