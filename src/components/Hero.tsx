export function Hero() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-purple-200/40 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 px-4 py-2 border border-indigo-200/60">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500"></span>
            </span>
            <span className="text-sm font-semibold text-indigo-700">AI-Powered Evaluation Engine</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-slate-900 via-indigo-800 to-slate-900 bg-clip-text text-transparent">
              Evaluate Code Beyond
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Just Correctness
            </span>
          </h1>
          
          {/* Description */}
          <p className="mb-10 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Advanced AI analyzes your code for <span className="font-semibold text-indigo-600">correctness</span>, 
            <span className="font-semibold text-blue-600"> efficiency</span>, 
            <span className="font-semibold text-purple-600"> readability</span>, and more. 
            Get instant, actionable feedback that helps you write better code.
          </p>
        </div>
      </div>
    </section>
  );
}
