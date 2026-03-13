import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20">
      <div className="relative z-10 text-center max-w-4xl">
        {/* Hero image placeholder */}
        <div className="animate-fade-in-up mb-10">
          <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto">
            <Image
              src="/hero-image.png"
              alt="Agents In Black"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Badge */}
        <div className="animate-fade-in-up inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span className="text-gray-300 text-sm font-mono">
            CLASSIFIED // PUMP.FUN TOKENIZED AGENTS
          </span>
        </div>

        {/* Title */}
        <h1 className="animate-fade-in-up text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
          Agents In{" "}
          <span className="text-gray-300">Black</span>
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-in-up-delay text-xl md:text-2xl text-gray-400 mb-4 max-w-2xl mx-auto">
          Two AI agents. One mission.{" "}
          <span className="text-white font-semibold">Buyback $AIB.</span>
        </p>

        <p className="animate-fade-in-up-delay-2 text-gray-500 mb-12 max-w-xl mx-auto">
          Agent K and Agent J work around the clock to protect the galaxy — and
          your bags. Powered by pump.fun&apos;s tokenized agent framework.
        </p>

        {/* CTA */}
        <div className="animate-fade-in-up-delay-2 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#buy"
            className="bg-white text-black font-bold px-8 py-4 rounded-full text-lg hover:bg-gray-200 transition-colors"
          >
            Buy $AIB
          </a>
          <a
            href="#how-it-works"
            className="border border-gray-700 text-gray-300 font-medium px-8 py-4 rounded-full text-lg hover:border-white hover:text-white transition-colors"
          >
            How it works
          </a>
        </div>

        {/* Terminal preview */}
        <div className="mt-16 animate-fade-in-up-delay-2 bg-mib-card border border-mib-border rounded-xl p-6 max-w-lg mx-auto text-left font-mono text-sm">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-gray-600" />
            <div className="w-3 h-3 rounded-full bg-gray-600" />
            <div className="w-3 h-3 rounded-full bg-gray-600" />
            <span className="ml-2 text-gray-600 text-xs">aib-terminal</span>
          </div>
          <div className="space-y-1.5 text-gray-500">
            <p>
              <span className="text-white">$</span> Initializing Agent K...{" "}
              <span className="text-white">ONLINE</span>
            </p>
            <p>
              <span className="text-white">$</span> Initializing Agent J...{" "}
              <span className="text-white">ONLINE</span>
            </p>
            <p>
              <span className="text-white">$</span> Buyback protocol{" "}
              <span className="text-white">ACTIVE</span>
            </p>
            <p>
              <span className="text-white">$</span> Protecting the galaxy...{" "}
              <span className="text-white animate-pulse">_</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
