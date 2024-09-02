"use client";
import NavBar from "@/components/NavBar";
import { FaFileDownload } from "react-icons/fa";
import Link from "next/link";

const Page = () => {
  const handleFileDownload = () => {
    const fileName = "/pdfs/DiMartinoNicholas_TechnicalAssessment_Part4.zip";
    const aTag = document.createElement("a");
    aTag.href = fileName;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <div>
      <NavBar />
      <div className="min-h-screen w-full flex justify-around items-center">
        <Link
          href="/pdfs/DiMartinoNicholas_TechnicalAssessment_Report.pdf"
          target="_blank"
          className="text-6xl text-[#22d3ee]"
          rel="noopener noreferrer"
        >
          <span className="flex flex-col items-center">
            Test Case Report
            <FaFileDownload />
          </span>
        </Link>
        <button
          onClick={handleFileDownload}
          className="text-6xl text-[#38bdf8]"
          rel="noopener noreferrer"
        >
          <span className="flex flex-col items-center">
            Test Case Zip File
            <FaFileDownload />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Page;