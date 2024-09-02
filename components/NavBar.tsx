import Link from "next/link";

const NavBar = () => {
  return (
    <div className="flex w-full justify-around items-center bg-black p-4 text-white border-b-2 border-white z-100">
      <Link href="/" className="font-bold text-lg hover:underline">Home</Link>
      <Link href="/presentation" className="font-bold text-lg hover:underline">Presentation</Link>
      <Link href="/technical-assessment" className="font-bold text-lg hover:underline">Technical Assessment</Link>
      <Link href="/about-me" className="font-bold text-lg hover:underline">About Me</Link>
    </div>
  );
};

export default NavBar;
