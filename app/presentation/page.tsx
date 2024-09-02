import NavBar from "@/components/NavBar";

const Page = () => {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col justify-center items-center text-white">
        <div className="text-7xl p-2 h-screen grid place-items-center">
          Next.js
        </div>
        <div className="bg-[#38bdf8] w-full h-1"></div>
        <div className="text-7xl p-2 h-screen grid place-items-center">
          What is it?
        </div>
        <div className="bg-[#818cf8] w-full h-1"></div>
        <div className="text-7xl p-2 h-screen grid place-items-center">
          What is wrong with React.js?
        </div>
        <div className="bg-[#c084fc] w-full h-1"></div>
        <div className="text-7xl p-2 h-screen grid place-items-center">
          What does Next.js fix?
        </div>
        <div className="bg-[#e879f9] w-full h-1"></div>
        <div className="text-7xl p-2 h-screen grid place-items-center">
          SSR and SSG
        </div>
        <div className="bg-[#22d3ee] w-full h-1"></div>
        <div className="text-7xl p-2 h-screen grid place-items-center">SEO</div>
        <div className="bg-[#38bdf8] w-full h-1"></div>
        <div className="text-7xl p-2 h-screen grid place-items-center">
          The Developer Experience
        </div>
        <div className="bg-[#818cf8] w-full h-1"></div>
        <div className="text-7xl p-2 h-screen grid place-items-center">
          Next.js Out-of-the-Box
        </div>
        <div className="bg-[#c084fc] w-full h-1"></div>
        <div className="text-7xl p-2 h-screen grid place-items-center">
          Thank you!
        </div>
        <div className="bg-white w-full h-1"></div>
      </div>
    </div>
  );
};

export default Page;
