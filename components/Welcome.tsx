import Link from "next/link";
import { WavyBackground } from "./ui/wavy-background";

const Welcome = () => {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40 ">
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        Nick DiMartino
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        Associate Enterprise Solutions Engineer Interview
      </p>
      <div className="flex justify-around mt-10">
        <Link
          href="/"
          className="font-bold text-base hover:underline text-white"
        >
          Home
        </Link>
        <Link
          href="/presentation"
          className="font-bold text-base hover:underline text-white"
        >
          Presentation
        </Link>
        <Link
          href="/about-me"
          className="font-bold text-base hover:underline text-white"
        >
          About Me
        </Link>
      </div>
    </WavyBackground>
  );
};

export default Welcome;
