import Image from "next/image";
import AgentKImg from "@/assets/Agent_K.png";
import AgentJImg from "@/assets/Agent_J.png";

export default function Tokenomics() {
  return (
    <section id="tokenomics" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gray-400 font-mono text-sm mb-3 tracking-widest uppercase">
            // Tokenomics
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            $AIB Token
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Fair launch on pump.fun. No presale. No team allocation. 100%
            community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Token info */}
          <div className="bg-mib-card border border-mib-border rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-6">Token Details</h3>
            <div className="space-y-4">
              {[
                ["Name", "Agents In Black"],
                ["Ticker", "$AIB"],
                ["Network", "Solana"],
                ["Launch", "pump.fun"],
                ["Buyback Agents", "2 (Agent K & Agent J)"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex justify-between items-center py-3 border-b border-mib-border last:border-0"
                >
                  <span className="text-gray-500 text-sm">{label}</span>
                  <span className="text-white font-mono text-sm">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Buyback mechanism */}
          <div className="bg-mib-card border border-mib-border rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-6">
              Buyback Mechanism
            </h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 rounded-lg overflow-hidden border border-mib-border relative">
                  <Image
                    src={AgentKImg}
                    alt="Agent K"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">
                    Agent K — Steady Accumulator
                  </p>
                  <p className="text-gray-500 text-sm">
                    Consistent, methodical buybacks. Builds the floor one
                    transaction at a time.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 rounded-lg overflow-hidden border border-mib-border relative">
                  <Image
                    src={AgentJImg}
                    alt="Agent J"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">
                    Agent J — Tactical Striker
                  </p>
                  <p className="text-gray-500 text-sm">
                    Aggressive, market-responsive buybacks. Maximizes impact when
                    it counts.
                  </p>
                </div>
              </div>
              <div className="mt-4 p-4 bg-white/5 border border-white/10 rounded-xl">
                <p className="text-gray-300 text-sm font-mono">
                  100% of agent revenue → $AIB buybacks
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
