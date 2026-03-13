const steps = [
  {
    number: "01",
    title: "Revenue flows in",
    description:
      "Users pay for agent services using USDC or SOL. Every payment is verified on-chain via pump.fun's invoice system.",
    icon: "\u2192",
  },
  {
    number: "02",
    title: "Agents execute buybacks",
    description:
      "Agent K and Agent J autonomously convert collected revenue into $AIB tokens, creating constant buy pressure.",
    icon: "\u27F2",
  },
  {
    number: "03",
    title: "Supply shrinks, value grows",
    description:
      "Bought-back tokens are removed from circulation. More revenue = more buybacks = stronger floor.",
    icon: "\u2191",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gray-400 font-mono text-sm mb-3 tracking-widest uppercase">
            // Protocol
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How the buyback works
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Powered by pump.fun&apos;s tokenized agent SDK. Fully on-chain.
            Fully autonomous. Fully transparent.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="card-hover bg-mib-card border border-mib-border rounded-2xl p-8 relative"
            >
              <div className="text-white/5 font-mono text-5xl font-bold absolute top-4 right-6">
                {step.number}
              </div>
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white text-xl">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Flow diagram */}
        <div className="mt-16 bg-mib-card border border-mib-border rounded-2xl p-8 font-mono text-sm">
          <p className="text-gray-600 mb-4">// buyback_flow.sol</p>
          <div className="space-y-2 text-gray-500">
            <p>
              <span className="text-white">user</span>.pay(amount, currency)
              <span className="text-gray-600"> → </span>
              <span className="text-gray-300">invoice verified on-chain</span>
            </p>
            <p>
              <span className="text-white">agent_k</span>.collect(revenue)
              <span className="text-gray-600"> → </span>
              <span className="text-gray-300">swap to $AIB via Jupiter</span>
            </p>
            <p>
              <span className="text-white">agent_j</span>.collect(revenue)
              <span className="text-gray-600"> → </span>
              <span className="text-gray-300">swap to $AIB via Jupiter</span>
            </p>
            <p>
              <span className="text-white">$AIB</span>.supply
              <span className="text-gray-600"> → </span>
              <span className="text-gray-300">decreasing</span>
              <span className="text-white"> ✓</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
