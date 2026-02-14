import { useState } from 'react';

interface CodeInputProps {
  onEvaluate: (code: string, language: string) => void;
  isEvaluating: boolean;
}

export function CodeInput({ onEvaluate, isEvaluating }: CodeInputProps) {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('python');
  const [inputMethod, setInputMethod] = useState<'paste' | 'file' | 'github'>('paste');
  const [githubUrl, setGithubUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.trim() || githubUrl.trim()) {
      const codeToEvaluate = code.trim() || `# Code from: ${githubUrl}\n# Simulated fetch...`;
      onEvaluate(codeToEvaluate, language);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setCode(event.target?.result as string);
      };
      reader.readAsText(file);
    }
  };

  const loadSampleCode = () => {
    const sample = `def find_duplicates(arr):
    # Find duplicate elements in array
    seen = {}
    duplicates = []
    
    for num in arr:
        if num in seen:
            duplicates.append(num)
        else:
            seen[num] = 1
    
    return duplicates

# Test
result = find_duplicates([1, 2, 3, 2, 4, 5, 3])
print(result)`;
    setCode(sample);
    setLanguage('python');
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl bg-white/80 backdrop-blur-sm border border-slate-200/60 shadow-xl p-6 sm:p-8">
            
            {/* Input Method Tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              <button
                onClick={() => setInputMethod('paste')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  inputMethod === 'paste'
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                📝 Paste Code
              </button>
              <button
                onClick={() => setInputMethod('file')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  inputMethod === 'file'
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                📁 Upload File
              </button>
              <button
                onClick={() => setInputMethod('github')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  inputMethod === 'github'
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                🐙 GitHub URL
              </button>
              <button
                onClick={loadSampleCode}
                className="ml-auto px-4 py-2 rounded-lg font-medium bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 hover:from-purple-200 hover:to-pink-200 transition-all"
              >
                ✨ Load Sample
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Language Selector */}
              <div className="mb-4">
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Programming Language
                </label>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                >
                  <option value="python">🐍 Python</option>
                  <option value="javascript">📜 JavaScript</option>
                  <option value="java">☕ Java</option>
                  <option value="cpp">⚙️ C++</option>
                  <option value="c">🔧 C</option>
                  <option value="typescript">💙 TypeScript</option>
                  <option value="go">🐹 Go</option>
                  <option value="rust">🦀 Rust</option>
                </select>
              </div>

              {/* Input Method Content */}
              {inputMethod === 'paste' && (
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Your Code
                  </label>
                  <textarea
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Paste your code here..."
                    className="w-full h-64 rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 font-mono text-sm text-slate-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all resize-none"
                    required
                  />
                </div>
              )}

              {inputMethod === 'file' && (
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Upload Code File
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      onChange={handleFileUpload}
                      accept=".py,.js,.java,.cpp,.c,.ts,.go,.rs,.jsx,.tsx"
                      className="w-full rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 px-4 py-12 text-slate-600 hover:border-indigo-400 transition-all cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-indigo-50 file:text-indigo-700 file:font-semibold hover:file:bg-indigo-100"
                    />
                  </div>
                  {code && (
                    <div className="mt-4">
                      <div className="text-sm font-semibold text-slate-700 mb-2">Preview:</div>
                      <div className="rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 font-mono text-sm text-slate-900 max-h-48 overflow-auto">
                        {code}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {inputMethod === 'github' && (
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    GitHub File URL
                  </label>
                  <input
                    type="url"
                    value={githubUrl}
                    onChange={(e) => setGithubUrl(e.target.value)}
                    placeholder="https://github.com/username/repo/blob/main/file.py"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                    required={inputMethod === 'github'}
                  />
                  <p className="mt-2 text-sm text-slate-500">
                    Enter a direct link to a code file on GitHub
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isEvaluating || (!code.trim() && !githubUrl.trim())}
                className="w-full rounded-xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 px-6 py-4 font-semibold text-white shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] active:scale-[0.98]"
              >
                {isEvaluating ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Analyzing Code with AI...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Evaluate Code with AI
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
