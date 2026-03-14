import Image from "next/image";
import LogoImg from "@/assets/logo.png";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-mib-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src={LogoImg}
            alt="AIB Logo"
            width={52}
            height={52}
            className="rounded-full"
          />
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
          <a href="#agents" className="hover:text-white transition-colors">
            Agents
          </a>
          <a href="#how-it-works" className="hover:text-white transition-colors">
            How it works
          </a>
          <a href="#tokenomics" className="hover:text-white transition-colors">
            Tokenomics
          </a>
        </div>

        <a
          href="https://pump.fun/coin/GExmg93Xqweq8o7N4jmC3DqwHppfdKtkWJJLMLYxpump"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black font-bold text-sm px-5 py-2 rounded-full hover:bg-gray-200 transition-colors"
        >
          Buy $AIB
        </a>
      </div>
    </nav>
  );
}
