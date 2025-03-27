import React from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import * as pdfjs from "pdfjs-dist/build/pdf";
import "pdfjs-dist/build/pdf.worker.entry";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`;

const pdfFiles = [
  "/pdf/NSIM/NISM-SERIES-I--CURRENCY-DERIVATIVE-EXAM-WORKBOOK-IN-PDF1.pdf",
  "/pdf/NSIM/NISM-SERIES-II-A--REGISTRAR-TO-AN-ISSUE-EXAM-WORKBOOK-IN-PDF2.pdf",
  "/pdf/NSIM/NISM-SERIES-II-B--REGISTRAR-TO-AN-ISSUE-MUTUAL-FUNDS-WORKBOOK-IN-PDF3.pdf",
  "/pdf/NSIM/NISM-SERIES-III-A--SECURITIES-INTERMEDIARIES-COMPLIANCE-NON-FUND-EXAM-WORKBOOK-IN-PDF4.pdf",
  "/pdf/NSIM/NISM-SERIES-IV--INTEREST-RATE-DERIVATIVES-EXAM-WORKBOOK-IN-PDF5.pdf",
  "/pdf/NSIM/NISM-SERIES-IX--MERCHANT-BANKING-EXAM-WORKBOOK-IN-PDF6.pdf",
  "/pdf/NSIM/NISM-SERIES-V-A--MUTUAL-FUND-DISTRIBUTORS-EXAM-WORKBOOK-IN-PDF7.pdf",
  "/pdf/NSIM/NISM-SERIES-V-A-HINDI--HINDI-MUTUAL-FUND-DISTRIBUTORS-EXAM-WORKBOOK-IN-PDF8.pdf",
  "/pdf/NSIM/NISM-SERIES-V-B--MUTUAL-FUND-FOUNDATION-EXAM-WORKBOOK-IN-PDF9.pdf",
  "/pdf/NSIM/NISM-SERIES-V-C--MUTUAL-FUND-DISTRIBUTORS-LEVEL-2-WORKBOOK-IN-PDF10.pdf",
  "/pdf/NSIM/NISM-SERIES-VI--DEPOSITORY-OPERATION-EXAM-WORKBOOK-IN-PDF11.pdf",
  "/pdf/NSIM/NISM-SERIES-VII--SECURITIES-OPERATIONS-AND-RISK-MANAGEMENT-EXAM-WORKBOOK-IN-PDF12.pdf",
  "/pdf/NSIM/NISM-SERIES-VIII--EQUITY-DERIVATIVES-EXAM-WORKBOOK-IN-PDF13.pdf",
  "/pdf/NSIM/NISM-SERIES-X-A--INVESTMENT-ADVISER-LEVEL-1-EXAM-WORKBOOK-IN-PDF14.pdf",
  "/pdf/NSIM/NISM-SERIES-XII--SECURITIES-MARKET-FOUNDATION-WORKBOOK-IN-PDF15.pdf",
  "/pdf/NSIM/NISM-SERIES-XIX-A--ALTERNATIVE-INVT-FUND-AIF-DISTRIBUTORS-EXAM-WORKBOOK-IN-PDF16.pdf",
  "/pdf/NSIM/NISM-SERIES-XIX-C--ALTERNATIVE-INVT-FUND-AIF-MANAGERS-EXAM-WORKBOOK-IN-PDF17.pdf",
  "/pdf/NSIM/NISM-SERIES-XV--RESEARCH-ANALYST-EXAM-WORKBOOK-IN-PDF18.pdf",
  "/pdf/NSIM/NISM-SERIES-XVI--COMMODITY-DERIVATIVE-EXAM-WORKBOOK-IN-PDF19.pdf",
  "/pdf/NSIM/NISM-SERIES-XVII--RETIREMENT-ADVISER-EXAM-WORKBOOK-IN-PDF (1)20.pdf",
  "/pdf/NSIM/NISM-SERIES-XVII--RETIREMENT-ADVISER-EXAM-WORKBOOK-IN-PDF21.pdf",
  "/pdf/NSIM/NISM-SERIES-XXI-A--PORTFOLIO-MANAGEMENT-EXAM-WORKBOOK-IN-PDF (1)22.pdf",
  "/pdf/NSIM/NISM-SERIES-XXI-B--PORTFOLIO-MANAGERS-EXAM-WORKBOOK-IN-PDF23.pdf",
  "/pdf/NSIM/NISM-SERIES-XXII--FIXED-INCOME-SECURITIES-EXAM-WORKBOOK-IN-PDF24.pdf",
];


const NSIM = () => {
  return (
    <div className="container py-4">

<h1 className="display-6 fw-normal py-5 text-center">
NISM Exams - Free Workbooks Download
                </h1>
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`}>
        <div className="row g-4">
          {pdfFiles.map((pdf, index) => (
            <div key={index} className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
              <div className="card">
           
                <div className="card-body text-center">
                  <div className="" style={{ height: "15rem", overflow: "hidden" }}>
                    <Viewer fileUrl={pdf} />
                  </div>
                  <a href={pdf} download className="btn btn-warning mt-3">Download PDF</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Worker>
    </div>
  );
};

export default NSIM;
