import type { EvaluationResult } from '../types';

interface EvaluationResultsProps {
  result: EvaluationResult;
  onReset: () => void;
}

export function EvaluationResults({ result, onReset }: EvaluationResultsProps) {
  const getScoreColor = (score: number) => {
    if (score >= 90) return 'from-green-500 to-emerald-500';
    if (score >= 75) return 'from-blue-500 to-cyan-500';
    if (score >= 60) return 'from-yellow-500 to-orange-500';
    return 'from-red-500 to-rose-500';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 90) return 'Excellent';
    if (score >= 75) return 'Good';
    if (score >= 60) return 'Fair';
    return 'Needs Improvement';
  };

  return (
    <div className="py-12 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          
          {/* Header with Reset Button */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Evaluation Results</h2>
              <p className="text-slate-600 mt-1">Comprehensive analysis of your code</p>
            </div>
            <button
              onClick={onReset}
              className="px-6 py-3 rounded-xl bg-white border-2 border-slate-300 font-semibold text-slate-700 hover:bg-slate-50 hover:border-indigo-400 transition-all"
            >
              ← Evaluate Another
            </button>
          </div>

          {/* Overall Score Card */}
          <div className="mb-8 rounded-3xl bg-gradient-to-br from-white to-slate-50 border border-slate-200/60 shadow-xl p-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-lg font-semibold text-slate-600 mb-2">Overall Score</h3>
                <div className="flex items-baseline gap-3">
                  <span className={`text-6xl font-extrabold bg-gradient-to-r ${getScoreColor(result.overallScore)} bg-clip-text text-transparent`}>
                    {result.overallScore}
                  </span>
                  <span className="text-3xl font-semibold text-slate-400">/100</span>
                </div>
                <div className={`mt-3 inline-block px-4 py-2 rounded-full bg-gradient-to-r ${getScoreColor(result.overallScore)} text-white font-semibold`}>
                  {getScoreLabel(result.overallScore)}
                </div>
              </div>
              
              {/* Circular Progress */}
              <div className="relative w-40 h-40">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="#e2e8f0"
                    strokeWidth="12"
                    fill="none"
                  />
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="url(#gradient)"
                    strokeWidth="12"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 70}`}
                    strokeDashoffset={`${2 * Math.PI * 70 * (1 - result.overallScore / 100)}`}
                    strokeLinecap="round"
                    className="transition-all duration-1000"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="50%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Correctness */}
            <MetricCard
              title="Correctness"
              icon="✅"
              score={result.metrics.correctness.score}
              details={
                <>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-600">Test Cases</span>
                    <span className="font-semibold text-slate-900">
                      {result.metrics.correctness.details.passedTests}/{result.metrics.correctness.details.totalTests}
                    </span>
                  </div>
                  {result.metrics.correctness.details.failedCases.length > 0 && (
                    <div className="mt-3 p-3 bg-red-50 rounded-lg border border-red-200">
                      <div className="text-xs font-semibold text-red-700 mb-2">Failed Cases:</div>
                      {result.metrics.correctness.details.failedCases.map((testCase, i) => (
                        <div key={i} className="text-xs text-red-600">• {testCase}</div>
                      ))}
                    </div>
                  )}
                </>
              }
            />

            {/* Time Efficiency */}
            <MetricCard
              title="Time Efficiency"
              icon="⚡"
              score={result.metrics.timeEfficiency.score}
              details={
                <>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-600">Detected</span>
                    <code className="text-sm font-mono font-semibold text-orange-600">
                      {result.metrics.timeEfficiency.detectedComplexity}
                    </code>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-600">Optimal</span>
                    <code className="text-sm font-mono font-semibold text-green-600">
                      {result.metrics.timeEfficiency.optimalComplexity}
                    </code>
                  </div>
                  <p className="text-xs text-slate-500 mt-3">{result.metrics.timeEfficiency.details}</p>
                </>
              }
            />

            {/* Space Efficiency */}
            <MetricCard
              title="Space Efficiency"
              icon="💾"
              score={result.metrics.spaceEfficiency.score}
              details={
                <>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-600">Complexity</span>
                    <code className="text-sm font-mono font-semibold text-blue-600">
                      {result.metrics.spaceEfficiency.complexity}
                    </code>
                  </div>
                  <p className="text-xs text-slate-500 mt-3">{result.metrics.spaceEfficiency.details}</p>
                </>
              }
            />

            {/* Readability */}
            <MetricCard
              title="Readability"
              icon="📖"
              score={result.metrics.readability.score}
              details={
                <>
                  {result.metrics.readability.issues.length > 0 ? (
                    <div className="space-y-1">
                      {result.metrics.readability.issues.map((issue, i) => (
                        <div key={i} className="text-xs text-slate-600 flex items-start gap-2">
                          <span className="text-yellow-500 mt-0.5">⚠️</span>
                          <span>{issue}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-green-600">✨ Code is well-formatted and readable</p>
                  )}
                </>
              }
            />

            {/* Best Practices */}
            <MetricCard
              title="Best Practices"
              icon="⭐"
              score={result.metrics.bestPractices.score}
              details={
                <>
                  {result.metrics.bestPractices.issues.length > 0 ? (
                    <div className="space-y-1">
                      {result.metrics.bestPractices.issues.map((issue, i) => (
                        <div key={i} className="text-xs text-slate-600 flex items-start gap-2">
                          <span className="text-blue-500 mt-0.5">💡</span>
                          <span>{issue}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-green-600">✨ Follows best practices well</p>
                  )}
                </>
              }
            />

            {/* Edge Cases */}
            <MetricCard
              title="Edge Cases"
              icon="🛡️"
              score={result.metrics.edgeCases.score}
              details={
                <>
                  {result.metrics.edgeCases.handled.length > 0 && (
                    <div className="mb-3">
                      <div className="text-xs font-semibold text-green-700 mb-1">Handled:</div>
                      {result.metrics.edgeCases.handled.map((item, i) => (
                        <div key={i} className="text-xs text-green-600">✓ {item}</div>
                      ))}
                    </div>
                  )}
                  {result.metrics.edgeCases.missing.length > 0 && (
                    <div>
                      <div className="text-xs font-semibold text-orange-700 mb-1">Missing:</div>
                      {result.metrics.edgeCases.missing.map((item, i) => (
                        <div key={i} className="text-xs text-orange-600">✗ {item}</div>
                      ))}
                    </div>
                  )}
                </>
              }
            />
          </div>

          {/* Suggestions */}
          <div className="rounded-3xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200/60 shadow-lg p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span className="text-3xl">💡</span>
              AI-Powered Suggestions
            </h3>
            <div className="space-y-4">
              {result.suggestions.map((suggestion, i) => (
                <div
                  key={i}
                  className="rounded-xl bg-white/80 backdrop-blur-sm border border-indigo-200/40 p-5 hover:shadow-md transition-all"
                >
                  <p className="text-slate-700 leading-relaxed">{suggestion}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Export Button */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => {
                const data = JSON.stringify(result, null, 2);
                const blob = new Blob([data], { type: 'application/json' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `code-evaluation-${new Date().getTime()}.json`;
                a.click();
              }}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-slate-700 to-slate-900 text-white font-semibold hover:from-slate-800 hover:to-black transition-all shadow-lg hover:shadow-xl"
            >
              📥 Export Results (JSON)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricCard({ title, icon, score, details }: { title: string; icon: string; score: number; details: React.ReactNode }) {
  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 75) return 'text-blue-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getBarColor = (score: number) => {
    if (score >= 90) return 'bg-gradient-to-r from-green-400 to-emerald-500';
    if (score >= 75) return 'bg-gradient-to-r from-blue-400 to-cyan-500';
    if (score >= 60) return 'bg-gradient-to-r from-yellow-400 to-orange-500';
    return 'bg-gradient-to-r from-red-400 to-rose-500';
  };

  return (
    <div className="rounded-2xl bg-white border border-slate-200/60 shadow-lg p-6 hover:shadow-xl transition-all">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{icon}</span>
          <h4 className="font-semibold text-slate-900">{title}</h4>
        </div>
        <span className={`text-2xl font-bold ${getScoreColor(score)}`}>{score}</span>
      </div>
      
      {/* Progress Bar */}
      <div className="mb-4 h-2 w-full bg-slate-100 rounded-full overflow-hidden">
        <div
          className={`h-full ${getBarColor(score)} transition-all duration-1000`}
          style={{ width: `${score}%` }}
        />
      </div>
      
      {/* Details */}
      <div className="text-sm">
        {details}
      </div>
    </div>
  );
}
