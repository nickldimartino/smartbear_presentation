import Link from "next/link";
import { WavyBackground } from "./ui/wavy-background";

const Welcome = () => {
  return (
    <WavyBackground className="w-full mx-auto pb-40 flex flex-col items-center">
      <p className="text-[7vw] text-white w-full font-bold inter-var text-center">
        Nick DiMartino
      </p>
      <p className="text-[2vw] text-white font-light inter-var text-center">
        Associate Enterprise Solutions Engineer Interview
      </p>
      <div className="flex w-11/12 justify-around mt-10">
        <Link
          href="/"
          className="font-bold text-[1.7vw] hover:underline text-white text-center w-1/4"
        >
          Home
        </Link>
        <Link
          href="/presentation"
          className="font-bold text-[1.7vw] hover:underline text-white text-center w-1/4"
        >
          Presentation
        </Link>
        <Link
          href="/technical-assessment"
          className="font-bold text-[1.7vw] hover:underline text-white text-center w-1/4"
        >
          Technical Assessment
        </Link>
        <Link
          href="/about-me"
          className="font-bold text-[1.7vw] hover:underline text-white text-center w-1/4"
        >
          About Me
        </Link>
      </div>
    </WavyBackground>
  );
};

export default Welcome;
