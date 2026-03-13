export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,65,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,65,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 text-center max-w-4xl">
        {/* Badge */}
        <div className="animate-fade-in-up inline-flex items-center gap-2 bg-mib-green/10 border border-mib-green/30 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-mib-green animate-pulse-green" />
          <span className="text-mib-green text-sm font-mono">
            CLASSIFIED // PUMP.FUN TOKENIZED AGENTS
          </span>
        </div>

        {/* Title */}
        <h1 className="animate-fade-in-up text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
          Agents In{" "}
          <span className="text-mib-green glow-green">Black</span>
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
            className="bg-mib-green text-black font-bold px-8 py-4 rounded-full text-lg hover:bg-mib-green-dim transition-colors"
          >
            Buy $AIB
          </a>
          <a
            href="#how-it-works"
            className="border border-gray-700 text-gray-300 font-medium px-8 py-4 rounded-full text-lg hover:border-mib-green hover:text-mib-green transition-colors"
          >
            How it works
          </a>
        </div>

        {/* Terminal preview */}
        <div className="mt-16 animate-fade-in-up-delay-2 bg-mib-card border border-mib-border rounded-xl p-6 max-w-lg mx-auto text-left font-mono text-sm">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-2 text-gray-600 text-xs">aib-terminal</span>
          </div>
          <div className="space-y-1.5 text-gray-400">
            <p>
              <span className="text-mib-green">$</span> Initializing Agent K...{" "}
              <span className="text-mib-green">ONLINE</span>
            </p>
            <p>
              <span className="text-mib-green">$</span> Initializing Agent J...{" "}
              <span className="text-mib-green">ONLINE</span>
            </p>
            <p>
              <span className="text-mib-green">$</span> Buyback protocol{" "}
              <span className="text-mib-green">ACTIVE</span>
            </p>
            <p>
              <span className="text-mib-green">$</span> Protecting the galaxy...{" "}
              <span className="text-white animate-pulse-green">_</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
