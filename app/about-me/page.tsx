import NavBar from "@/components/NavBar";
import Image from "next/image";
import headshot from "@/public/imgs/headshot.jpg";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { FaFileDownload } from "react-icons/fa";
import { FaFaceGrin } from "react-icons/fa6";

const Page = () => {
  return (
    <div>
      <NavBar />
      <div className="min-h-screen flex flex-col justify-around items-center">
        <div className="flex justify-center mt-10">
          <Image
            src={headshot}
            alt="product preview"
            width={300}
            height={300}
            sizes="100vw"
            quality={100}
            className="rounded-full border-2 border-white shadow-lg shadow-white"
          />
        </div>
        <div className="text-center -mt-20 font-bold text-lg">
          <div>Nick DiMartino</div>
          <div>Greater Boston, MA</div>
          <div>nick.l.dimartino@gmail.com</div>
          <div>+1 603 793 - 3730</div>
        </div>
        <div className="w-3/4 flex justify-around">
          <a
            href="https://nickldimartino.github.io/portfolio/"
            target="_blank"
            className="text-6xl text-[#38bdf8]"
          >
            <FaFaceGrin />
          </a>
          <a
            href="https://github.com/nickldimartino"
            target="_blank"
            className="text-6xl text-[#818cf8]"
          >
            <SiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/nicholas-dimartino/"
            target="_blank"
            className="text-6xl text-[#c084fc]"
          >
            <SiLinkedin />
          </a>
          <a
            href="/pdfs/Resume_DiMartinoNicholas.pdf"
            target="_blank"
            className="text-6xl text-[#22d3ee]"
            rel="noopener noreferrer"
          >
            <FaFileDownload />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page;
