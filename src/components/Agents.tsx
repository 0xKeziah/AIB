import Image from "next/image";
import AgentKImg from "@/assets/Agent_K.png";
import AgentJImg from "@/assets/Agent_J.png";

const agents = [
  {
    name: "Agent K",
    codename: "K-UNIT",
    role: "Senior Buyback Operative",
    description:
      "The veteran. Methodical, precise, relentless. Agent K has been protecting portfolios since day one. He doesn't flinch. He doesn't hesitate. He just buys back.",
    traits: ["Steady accumulation", "High-frequency buybacks", "Never sleeps"],
    status: "ACTIVE",
    image: AgentKImg,
  },
  {
    name: "Agent J",
    codename: "J-UNIT",
    role: "Tactical Buyback Specialist",
    description:
      "The rookie with the firepower. Agent J brings energy and aggression to every buyback operation. Fast, loud, effective.",
    traits: ["Aggressive strategy", "Market-responsive", "Maximum impact"],
    status: "ACTIVE",
    image: AgentJImg,
  },
];

export default function Agents() {
  return (
    <section id="agents" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gray-400 font-mono text-sm mb-3 tracking-widest uppercase">
            // Meet the agents
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Two agents. One mission.
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Deployed on Solana via pump.fun&apos;s tokenized agent framework, Agent K
            and Agent J autonomously buyback $AIB around the clock.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {agents.map((agent) => (
            <div
              key={agent.name}
              className="card-hover bg-mib-card border border-mib-border rounded-2xl p-8 relative overflow-hidden"
            >
              {/* Status indicator */}
              <div className="absolute top-6 right-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span className="text-gray-400 text-xs font-mono">
                  {agent.status}
                </span>
              </div>

              {/* Agent image */}
              <div className="w-24 h-24 rounded-2xl overflow-hidden border border-mib-border mb-6 relative">
                <Image
                  src={agent.image}
                  alt={agent.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Info */}
              <div className="mb-1 font-mono text-xs text-gray-600">
                {agent.codename}
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">
                {agent.name}
              </h3>
              <p className="text-gray-300 text-sm font-medium mb-4">
                {agent.role}
              </p>
              <p className="text-gray-500 leading-relaxed mb-6">
                {agent.description}
              </p>

              {/* Traits */}
              <div className="flex flex-wrap gap-2">
                {agent.traits.map((trait) => (
                  <span
                    key={trait}
                    className="bg-white/5 border border-white/10 text-gray-400 text-xs font-mono px-3 py-1 rounded-full"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
