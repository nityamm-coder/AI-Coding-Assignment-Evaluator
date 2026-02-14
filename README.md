# 🚀 CodeEval AI - Intelligent Code Assessment Platform

An AI-powered coding assignment evaluator that goes beyond just test cases to provide comprehensive, multi-dimensional code analysis.

![CodeEval AI](https://img.shields.io/badge/AI-Powered-blue?style=for-the-badge)
![Railway Ready](https://img.shields.io/badge/Railway-Ready-success?style=for-the-badge)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)

## ✨ Features

### 🎯 Multi-Dimensional Evaluation
- **Correctness** - Test case success rate and edge case handling
- **Time Efficiency** - Algorithm complexity analysis (O(n), O(n²), etc.)
- **Space Efficiency** - Memory usage optimization
- **Readability** - Code clarity, naming conventions, documentation
- **Best Practices** - Industry standards and patterns
- **Edge Cases** - Boundary condition handling

### 🤖 AI-Powered Insights
- Smart code analysis using advanced algorithms
- Context-aware suggestions for improvement
- Human-like explanations of issues
- Actionable feedback for learning

### ⚡ Instant Results
- Analysis in under 2 seconds
- Real-time evaluation
- No manual review needed
- Scalable to thousands of submissions

### 📊 Comprehensive Reports
- Overall score with detailed breakdown
- Visual progress indicators
- Specific issue identification
- Improvement suggestions
- Export results as JSON

## 🎨 User Interface

- **Modern & Catchy Design** - Gradient backgrounds, smooth animations
- **Responsive Layout** - Works on all devices
- **Intuitive Flow** - Simple 3-step process
- **Visual Feedback** - Progress bars, score indicators, color coding

## 🛠️ Tech Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS 4
- **Build Tool**: Vite
- **Deployment**: Railway (Free Tier Compatible)

## 🚀 Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd codeeval-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## ☁️ Deploy to Railway (Free Tier)

### Method 1: One-Click Deploy

1. Click the button below:
   [![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new)

2. Select this repository
3. Railway will automatically detect settings and deploy

### Method 2: Manual Deploy

1. **Create Railway account** at [railway.app](https://railway.app)

2. **Create new project**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose this repository

3. **Configure build settings** (Auto-detected):
   ```
   Build Command: npm run build
   Start Command: npx serve dist -s
   ```

4. **Add environment variables** (if needed):
   ```
   NODE_ENV=production
   ```

5. **Deploy!**
   - Railway will build and deploy automatically
   - Get your public URL

### Railway Free Tier Benefits
✅ 500 hours of usage per month  
✅ 8GB RAM  
✅ Shared CPU  
✅ Perfect for this static site  
✅ Auto-deploy on git push  

## 📝 How to Use

### 1. Input Your Code
Choose from three methods:
- **Paste Code** - Direct copy-paste
- **Upload File** - .py, .js, .java, .cpp, etc.
- **GitHub URL** - Link to file on GitHub

### 2. Select Language
Support for:
- 🐍 Python
- 📜 JavaScript
- 💙 TypeScript
- ☕ Java
- ⚙️ C++
- 🔧 C
- 🐹 Go
- 🦀 Rust

### 3. Get Results
Receive comprehensive evaluation with:
- Overall score (0-100)
- Metric breakdowns
- Specific issues identified
- AI-powered suggestions
- Export capability

## 🎯 Evaluation Methodology

### Score Weights
```
Overall Score = 
  30% Correctness +
  20% Time Efficiency +
  15% Space Efficiency +
  15% Readability +
  10% Best Practices +
  10% Edge Cases
```

### Analysis Engine
The system performs static code analysis to detect:
- Loop complexity (nested loops = O(n²))
- Variable naming patterns
- Comment presence
- Function modularity
- Edge case handling
- Documentation quality

## 🎓 Use Cases

### For Students
- ✅ Get instant feedback on assignments
- ✅ Understand code quality issues
- ✅ Learn best practices
- ✅ Improve before submission

### For Educators
- ✅ Automated grading at scale
- ✅ Consistent evaluation standards
- ✅ Detailed feedback generation
- ✅ Time saved on manual review

### For Recruiters
- ✅ Fair candidate assessment
- ✅ Objective scoring metrics
- ✅ Quick screening process
- ✅ Comprehensive skill evaluation

## 📊 Sample Output

```
Overall Score: 78/100

✅ Correctness - 90/100
   Passed 18/20 test cases
   Failed: Empty string, Large input

⚡ Time Efficiency - 75/100
   Detected: O(n²)
   Optimal: O(n)
   Suggestion: Use hash map instead of nested loops

💾 Space Efficiency - 85/100
   Complexity: O(n)
   Within acceptable limits

📖 Readability - 70/100
   Issues:
   - Use meaningful variable names
   - Add docstrings
   - Include inline comments

⭐ Best Practices - 75/100
   Consider breaking into smaller functions

🛡️ Edge Cases - 65/100
   Missing: Null checks, Empty input handling
```

## 🔧 Configuration

The evaluation engine can be customized in `src/App.tsx`:

- Adjust score weights
- Add new evaluation metrics
- Modify complexity detection
- Enhance suggestion generation

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests
- Improve documentation

## 📄 License

MIT License - feel free to use for your hackathon, project, or production!

## 🏆 Hackathon Ready

This project is specifically designed for hackathons:
- ✅ Complete MVP functionality
- ✅ Professional UI/UX
- ✅ Easy deployment
- ✅ Demo-ready
- ✅ Extensible architecture

## 🎬 Demo Script (5 minutes)

1. **Introduction** (30s)
   - Problem statement
   - Current gaps in code evaluation

2. **Platform Tour** (1m)
   - Landing page features
   - Code input methods
   - Supported languages

3. **Live Demo** (2m)
   - Upload sample code
   - Show real-time analysis
   - Walk through results

4. **Key Features** (1m)
   - Multi-dimensional scoring
   - AI suggestions
   - Visual reports

5. **Technical Highlights** (30s)
   - Architecture
   - Scalability
   - Deployment ease

## 🌟 What's Next?

Future enhancements could include:
- Real AI integration (OpenAI, Claude)
- Plagiarism detection
- Code similarity analysis
- Multiple language comparisons
- Historical tracking
- Team collaboration features

---

**Built with ❤️ for better code evaluation**

Deploy now and revolutionize your code assessment process! 🚀
