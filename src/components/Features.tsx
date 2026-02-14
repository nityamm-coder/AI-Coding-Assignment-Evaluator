export function Features() {
  const features = [
    {
      icon: '🎯',
      title: 'Multi-Dimensional Analysis',
      description: 'Evaluates correctness, efficiency, readability, and best practices in one comprehensive report.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '⚡',
      title: 'Instant Feedback',
      description: 'Get detailed evaluation results in under 2 seconds. No waiting, no manual review needed.',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: '🤖',
      title: 'AI-Powered Insights',
      description: 'Advanced algorithms detect code smells, complexity issues, and provide actionable suggestions.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: '📊',
      title: 'Detailed Metrics',
      description: 'Score breakdown across 6 key dimensions with visual graphs and progress indicators.',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: '🎓',
      title: 'Learning-Focused',
      description: 'Clear explanations help students understand weaknesses and improve their coding skills.',
      gradient: 'from-orange-500 to-amber-500'
    },
    {
      icon: '🔄',
      title: 'Consistent Evaluation',
      description: 'Automated scoring ensures fair, unbiased assessment across all submissions at scale.',
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">CodeEval AI?</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Revolutionize your code review process with intelligent, automated evaluation
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200/60 p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} mb-4 shadow-lg`}>
                  <span className="text-3xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="inline-block rounded-2xl bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-indigo-200/60 p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Ready to Level Up Your Code Review?
              </h3>
              <p className="text-slate-600 mb-6">
                Join thousands of developers and educators using CodeEval AI
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <span className="px-4 py-2 rounded-full bg-white border border-slate-200 text-sm font-semibold text-slate-700">
                  ✓ Free to Use
                </span>
                <span className="px-4 py-2 rounded-full bg-white border border-slate-200 text-sm font-semibold text-slate-700">
                  ✓ No Sign-up Required
                </span>
                <span className="px-4 py-2 rounded-full bg-white border border-slate-200 text-sm font-semibold text-slate-700">
                  ✓ Instant Results
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
