export default function Footer() {
  return (
    <footer className="border-t border-mib-border py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/10 border border-white/30 flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="font-mono font-bold text-white">
              Agents In Black
            </span>
            <span className="text-gray-600 font-mono text-sm">$AIB</span>
          </div>

          <p className="text-gray-600 text-sm text-center">
            Protecting the galaxy — one buyback at a time.
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a
              href="https://x.com/i/communities/2032834652063379582/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Twitter
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors"
            >
              pump.fun
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-mib-border text-center">
          <p className="text-gray-700 text-xs font-mono">
            CLASSIFIED // AGENTS IN BLACK // SOLANA // PUMP.FUN TOKENIZED AGENTS
          </p>
        </div>
      </div>
    </footer>
  );
}
