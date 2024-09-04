import NavBar from "@/components/NavBar";
import Image from "next/image";
import NextJSLogo from "@/public/imgs/nextjslogo.png";
import ReactJSLogo from "@/public/imgs/reactjslogo.png";

const Page = () => {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col justify-center items-center text-white">
        <div className="text-[4vw] p-2 h-screen grid place-items-center">
          <Image
            src={NextJSLogo}
            alt="product preview"
            width={900}
            height={900}
            sizes="100vw"
            quality={100}
            style={{ width: '50vw', height: 'auto' }}
            className="border-2 border-white shadow-lg shadow-white"
          />
        </div>
        <div className="h-[50rem] w-full bg-black bg-grid-white/[0.2] relative flex items-center justify-center">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]"></div>
          <p className="text-[4vw] font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
            What is it?
          </p>
        </div>
        <div className="text-[4vw] p-2 h-screen grid place-items-center font-bold relative z-20 py-8">
          <Image
            src={ReactJSLogo}
            alt="product preview"
            width={900}
            height={900}
            sizes="100vw"
            quality={100}
            style={{ width: '50vw', height: 'auto' }}
            className="border-2 border-white shadow-lg shadow-white"
          />
        </div>
        <div className="h-[50rem] w-full bg-white bg-grid-black/[0.2] relative flex items-center justify-center">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <p className="text-[4vw] font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-600 py-8">
            What does Next.js fix?
          </p>
        </div>

        <div className="text-[4vw] p-2 h-screen grid place-items-center font-bold relative z-20 py-8">
          <div>Server-Side Rendering (SSR)</div>
          <div>Static-Site Generation (SSG)</div>
        </div>
        <div className="h-[50rem] w-full bg-black bg-grid-white/[0.2] relative flex items-center justify-center">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]"></div>
          <p className="text-[4vw] font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
            Search Enginge Optimization (SEO)
          </p>
        </div>
        <div className="text-[4vw] p-2 h-screen grid place-items-center font-bold relative z-20 py-8">
          {"The Developer's Experience"}
        </div>
        <div className="h-[50rem] w-full bg-white bg-grid-black/[0.2] relative flex items-center justify-center">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <p className="text-[4vw] font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-600 py-8">
            Next.js Out-of-the-Box
          </p>
        </div>
        <div className="text-[4vw] p-2 h-screen grid place-items-center font-bold relative z-20 py-8">
          Are there competitors?
        </div>
        <div className="h-[50rem] w-full bg-black bg-grid-white/[0.2] relative flex items-center justify-center">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]"></div>
          <p className="text-[4vw] font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
            Thank you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
