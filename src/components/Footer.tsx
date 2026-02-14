export function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200/60 bg-white/60 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-slate-900 mb-4">CodeAssess</h3>
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
          <p className="text-center text-sm text-slate-500">
            Made by <span className="font-semibold text-slate-700">Nityam Mishra</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
