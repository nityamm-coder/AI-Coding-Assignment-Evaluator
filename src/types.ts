export interface EvaluationResult {
  overallScore: number;
  metrics: {
    correctness: {
      score: number;
      details: {
        passedTests: number;
        totalTests: number;
        failedCases: string[];
      };
    };
    timeEfficiency: {
      score: number;
      detectedComplexity: string;
      optimalComplexity: string;
      details: string;
    };
    spaceEfficiency: {
      score: number;
      complexity: string;
      details: string;
    };
    readability: {
      score: number;
      issues: string[];
    };
    bestPractices: {
      score: number;
      issues: string[];
    };
    edgeCases: {
      score: number;
      handled: string[];
      missing: string[];
    };
  };
  suggestions: string[];
  timestamp: string;
}
