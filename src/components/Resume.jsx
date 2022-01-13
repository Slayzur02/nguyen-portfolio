import React from "react";

import { Document, Page } from "react-pdf";

import pdf from "../assets/nguyen-resume.pdf";

export default function Resume() {
  return (
    <div className="h-full flex justify-center">
      <Document file={pdf} options={{ workerSrc: "/pdf.worker.js" }} className="border border-black">
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}
