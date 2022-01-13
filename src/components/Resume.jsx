import React from "react";

import { Document, Page, pdfjs } from "react-pdf";

import pdf from "../assets/nguyen-resume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function Resume() {
  return (
    <div className="h-full flex justify-center">
      <Document file={pdf}  className="border border-black">
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}
