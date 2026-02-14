import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CodeInput } from './components/CodeInput';
import { EvaluationResults } from './components/EvaluationResults';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import type { EvaluationResult } from './types';

export function App() {
  const [evaluationResult, setEvaluationResult] = useState<EvaluationResult | null>(null);
  const [isEvaluating, setIsEvaluating] = useState(false);

  const handleEvaluate = async (code: string, language: string) => {
    setIsEvaluating(true);
    // Simulate AI evaluation delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const result = generateEvaluation(code, language);
    setEvaluationResult(result);
    setIsEvaluating(false);
  };

  const handleReset = () => {
    setEvaluationResult(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40">
      <Header />
      
      {!evaluationResult ? (
        <>
          <Hero />
          <CodeInput onEvaluate={handleEvaluate} isEvaluating={isEvaluating} />
          <Features />
        </>
      ) : (
        <EvaluationResults result={evaluationResult} onReset={handleReset} />
      )}
      
      <Footer />
    </div>
  );
}

// Smart evaluation engine
function generateEvaluation(code: string, _language: string): EvaluationResult {
  // Basic code analysis
  const hasComments = /\/\/|\/\*|\#|'''|"""/g.test(code);
  const hasFunctions = /function|def |const \w+\s*=/g.test(code);
  const hasLoops = /for|while|forEach|map|reduce/g.test(code);
  const nestedLoops = (code.match(/for|while/g) || []).length > 1;
  const hasVariableNames = /let \w{1,2}\s|var \w{1,2}\s|x\s*=|temp\d/g.test(code);
  const hasMeaningfulNames = /\w{4,}/g.test(code);
  const hasDocstring = /\/\*\*|'''|"""/g.test(code);
  const hasEdgeCaseHandling = /if.*\(.*null|undefined|empty|length.*0|\.trim\(\)/gi.test(code);
  
  // Correctness Score
  const correctnessScore = Math.min(95, 70 + (hasEdgeCaseHandling ? 20 : 0) + Math.random() * 10);
  const passedTests = hasEdgeCaseHandling ? 18 + Math.floor(Math.random() * 2) : 16 + Math.floor(Math.random() * 3);
  
  // Time Efficiency Score
  let timeScore = 85;
  let detectedComplexity = 'O(n)';
  if (nestedLoops) {
    timeScore = 65 + Math.random() * 15;
    detectedComplexity = 'O(n²)';
  } else if (hasLoops) {
    timeScore = 75 + Math.random() * 15;
  }
  
  // Space Efficiency Score
  const spaceScore = 75 + Math.random() * 20;
  
  // Readability Score
  let readabilityScore = 50;
  if (hasMeaningfulNames) readabilityScore += 15;
  if (hasComments) readabilityScore += 15;
  if (hasDocstring) readabilityScore += 10;
  if (!hasVariableNames) readabilityScore += 10;
  readabilityScore = Math.min(95, readabilityScore + Math.random() * 10);
  
  // Best Practices Score
  let bestPracticesScore = 60;
  if (hasFunctions) bestPracticesScore += 15;
  if (hasDocstring) bestPracticesScore += 10;
  if (!hasVariableNames) bestPracticesScore += 10;
  bestPracticesScore = Math.min(95, bestPracticesScore + Math.random() * 10);
  
  // Edge Cases Score
  const edgeCasesScore = hasEdgeCaseHandling ? 75 + Math.random() * 20 : 45 + Math.random() * 20;
  
  const overallScore = Math.round(
    (correctnessScore * 0.3) +
    (timeScore * 0.2) +
    (spaceScore * 0.15) +
    (readabilityScore * 0.15) +
    (bestPracticesScore * 0.1) +
    (edgeCasesScore * 0.1)
  );

  return {
    overallScore,
    metrics: {
      correctness: {
        score: Math.round(correctnessScore),
        details: {
          passedTests,
          totalTests: 20,
          failedCases: passedTests < 20 ? ['Empty string input', 'Large input (10^6 elements)'].slice(0, 20 - passedTests) : [],
        }
      },
      timeEfficiency: {
        score: Math.round(timeScore),
        detectedComplexity,
        optimalComplexity: 'O(n)',
        details: nestedLoops ? 'Nested loops detected - consider optimization' : 'Good time complexity'
      },
      spaceEfficiency: {
        score: Math.round(spaceScore),
        complexity: 'O(n)',
        details: 'Memory usage is within acceptable limits'
      },
      readability: {
        score: Math.round(readabilityScore),
        issues: [
          ...(hasVariableNames ? ['Use meaningful variable names instead of single letters'] : []),
          ...(!hasComments ? ['Add inline comments for complex logic'] : []),
          ...(!hasDocstring ? ['Add docstring/documentation'] : [])
        ]
      },
      bestPractices: {
        score: Math.round(bestPracticesScore),
        issues: [
          ...(!hasFunctions ? ['Consider breaking code into smaller functions'] : []),
          ...(!hasDocstring ? ['Add function documentation'] : [])
        ]
      },
      edgeCases: {
        score: Math.round(edgeCasesScore),
        handled: hasEdgeCaseHandling ? ['Null checks', 'Empty input handling'] : [],
        missing: !hasEdgeCaseHandling ? ['Empty input validation', 'Null/undefined checks', 'Large input handling'] : []
      }
    },
    suggestions: generateSuggestions(code, {
      hasComments,
      hasVariableNames,
      nestedLoops,
      hasEdgeCaseHandling,
      hasDocstring
    }),
    timestamp: new Date().toISOString()
  };
}

function generateSuggestions(_code: string, flags: any): string[] {
  const suggestions = [];
  
  if (flags.nestedLoops) {
    suggestions.push('🚀 Optimize nested loops: Consider using hash maps or sliding window techniques to reduce time complexity from O(n²) to O(n).');
  }
  
  if (!flags.hasEdgeCaseHandling) {
    suggestions.push('🛡️ Add edge case handling: Include checks for empty inputs, null values, and boundary conditions.');
  }
  
  if (flags.hasVariableNames) {
    suggestions.push('📝 Improve variable naming: Replace single-letter variables (x, i, temp) with descriptive names that explain their purpose.');
  }
  
  if (!flags.hasComments) {
    suggestions.push('💡 Add comments: Document complex logic sections to improve code maintainability.');
  }
  
  if (!flags.hasDocstring) {
    suggestions.push('📚 Add documentation: Include function docstrings describing parameters, return values, and purpose.');
  }
  
  suggestions.push('✨ Consider splitting long functions into smaller, reusable components for better modularity.');
  suggestions.push('🔍 Add unit tests to verify edge cases and ensure code correctness.');
  
  return suggestions.slice(0, 5);
}
