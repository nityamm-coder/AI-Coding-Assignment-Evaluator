export function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200/60 bg-white/60 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-slate-900 mb-4">CodeEval AI</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Next-generation code assessment platform powered by advanced AI algorithms.
            </p>
          </div>

          {/* Features */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Features</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>• Multi-Dimensional Analysis</li>
              <li>• AI-Powered Feedback</li>
              <li>• Instant Results</li>
              <li>• Fair Evaluation</li>
            </ul>
          </div>

          {/* Supported Languages */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Languages</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>• Python</li>
              <li>• JavaScript/TypeScript</li>
              <li>• Java</li>
              <li>• C/C++, Go, Rust</li>
            </ul>
          </div>

          {/* Metrics */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Evaluation Metrics</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>• Correctness</li>
              <li>• Time & Space Efficiency</li>
              <li>• Code Readability</li>
              <li>• Best Practices</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200/60">
          
          {/* Deployment Info */}
          <div className="mt-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200/60">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </span>
              <span className="text-xs font-semibold text-green-700">
                Ready for Railway Deployment • Free Tier Compatible
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
