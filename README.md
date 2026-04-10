# 🔄 Node.js CI/CD Practice

**Learning repository for mastering continuous integration and deployment with GitHub Actions, automated testing, and Node.js backend best practices.**

![Node.js](https://img.shields.io/badge/Node.js-18+-green?style=flat-square&logo=node.js)
![GitHub Actions](https://img.shields.io/badge/CI-GitHub%20Actions-blue?style=flat-square&logo=githubactions)
![Jest](https://img.shields.io/badge/Testing-Jest-red?style=flat-square&logo=jest)
![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)

---

## 📖 Overview

This repository is a hands-on learning project focused on implementing and practicing continuous integration/continuous deployment (CI/CD) workflows using GitHub Actions with a Node.js backend.

**Learning Goals:**
- ✅ Automated testing on every push
- ✅ Code quality checks (linting)
- ✅ Build verification
- ✅ Test coverage reporting
- ✅ Branch protection workflows
- ✅ Deployment automation

**This is an active learning project** - continuously evolving as I explore new CI/CD patterns and best practices.

---

## 🎯 Learning Objectives

### Completed ✅
- [x] Basic GitHub Actions workflow setup
- [x] Automated testing with Jest
- [x] Code linting with ESLint
- [x] Build process automation
- [x] Environment variable handling
- [x] Multi-stage CI pipeline

### In Progress 🚧
- [ ] Code coverage tracking (Codecov/Coveralls)
- [ ] Security scanning (Snyk/Dependabot)
- [ ] Performance testing
- [ ] Docker containerization in CI
- [ ] Multi-environment deployments
- [ ] Slack/Discord notifications

### Planned 📋
- [ ] Advanced caching strategies
- [ ] Matrix builds (multiple Node versions)
- [ ] Semantic versioning automation
- [ ] Release automation
- [ ] CD to production (Render/Heroku)

---

## 🛠️ Tech Stack

**Core:**
- Node.js 18+
- Express.js (if API routes added)
- JavaScript/ES6+

**Testing:**
- Jest (Unit testing framework)
- Supertest (API testing - optional)

**CI/CD:**
- GitHub Actions (Workflow automation)
- ESLint (Code quality)
- Prettier (Code formatting)

**Tools:**
- npm (Package management)
- dotenv (Environment variables)

---

## 📁 Project Structure

```
node-ci-practice/
├── .github/
│   └── workflows/
│       ├── ci.yml              # Main CI pipeline
│       ├── lint.yml            # Linting workflow (optional)
│       └── deploy.yml          # Deployment workflow (future)
├── src/
│   ├── index.js                # Main entry point
│   ├── app.js                  # Express app (if applicable)
│   ├── routes/                 # API routes
│   ├── controllers/            # Route controllers
│   ├── middleware/             # Express middleware
│   └── utils/                  # Utility functions
├── tests/
│   ├── unit/                   # Unit tests
│   ├── integration/            # Integration tests
│   └── setup.js                # Test configuration
├── coverage/                   # Test coverage reports (gitignored)
├── dist/                       # Build output (gitignored)
├── .env.test                   # Test environment variables
├── .eslintrc.json              # ESLint configuration
├── .prettierrc                 # Prettier configuration
├── jest.config.js              # Jest configuration
├── package.json                # Dependencies & scripts
└── README.md                   # This file
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn
- Git

### Installation

**1. Clone Repository**
```bash
git clone https://github.com/DIYA73/node-ci-practice.git
cd node-ci-practice
```

**2. Install Dependencies**
```bash
npm install
```

**3. Run Tests**
```bash
npm test
```

**4. Run Linter**
```bash
npm run lint
```

**5. Start Development Server**
```bash
npm run dev
```

---

## 🔄 GitHub Actions Workflows

### Main CI Workflow

**File:** `.github/workflows/ci.yml`

**Triggers:**
- Push to `main` branch
- Pull requests to `main`

**Steps:**
1. **Checkout Code**: Clones repository
2. **Setup Node.js**: Installs Node.js 18
3. **Install Dependencies**: Runs `npm ci`
4. **Run Linter**: Executes ESLint
5. **Run Tests**: Executes Jest with coverage
6. **Upload Coverage**: Sends coverage to Codecov (future)
7. **Build Project**: Compiles code (if TypeScript)

**Example Workflow:**
```yaml
name: CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    
    strategy:
      matrix:
        node-version: [16.x, 18.x, 20.x]
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v3
        with:
          node-version: ${{ matrix.node-version }}
          cache: 'npm'
      
      - name: Install Dependencies
        run: npm ci
      
      - name: Run Linter
        run: npm run lint
      
      - name: Run Tests
        run: npm test
      
      - name: Upload Coverage
        uses: codecov/codecov-action@v3
        with:
          files: ./coverage/lcov.info
```

---

## 🧪 Testing

### Run All Tests
```bash
npm test
```

### Run Tests in Watch Mode
```bash
npm run test:watch
```

### Generate Coverage Report
```bash
npm run test:coverage
```

### View Coverage Report
```bash
open coverage/lcov-report/index.html
```

### Example Test
```javascript
// tests/unit/example.test.js
describe('Example Test Suite', () => {
  test('should pass basic assertion', () => {
    expect(1 + 1).toBe(2);
  });
  
  test('should handle async operations', async () => {
    const result = await Promise.resolve('success');
    expect(result).toBe('success');
  });
});
```

---

## 📊 Code Quality

### ESLint Configuration

**File:** `.eslintrc.json`
```json
{
  "env": {
    "node": true,
    "es2021": true,
    "jest": true
  },
  "extends": [
    "eslint:recommended"
  ],
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "rules": {
    "no-console": "warn",
    "no-unused-vars": "error",
    "semi": ["error", "always"]
  }
}
```

### Run Linter
```bash
npm run lint
```

### Auto-Fix Issues
```bash
npm run lint:fix
```

---

## 🔒 Environment Variables

**Test Environment** (`.env.test`):
```env
NODE_ENV=test
PORT=3000
API_KEY=test-api-key
```

**Note:** Never commit actual secrets to repository!

---

## 📈 CI/CD Best Practices Learned

### 1. Fast Feedback Loops
- Run linting before tests (fail fast)
- Use caching for dependencies
- Parallel job execution

### 2. Consistent Environments
- Use exact Node versions
- Lock dependencies with `package-lock.json`
- Test in clean environments

### 3. Security
- Never expose secrets in logs
- Use GitHub Secrets for sensitive data
- Scan for vulnerabilities

### 4. Coverage Tracking
- Maintain >80% test coverage
- Track coverage trends
- Block PRs with coverage drops

### 5. Branch Protection
- Require status checks to pass
- Enforce code reviews
- Prevent direct pushes to main

---

## 🛠️ Scripts

```json
{
  "scripts": {
    "start": "node src/index.js",
    "dev": "nodemon src/index.js",
    "test": "jest --coverage",
    "test:watch": "jest --watch",
    "lint": "eslint src/**/*.js",
    "lint:fix": "eslint src/**/*.js --fix",
    "format": "prettier --write 'src/**/*.js'",
    "build": "echo 'Build step here'"
  }
}
```

---

## 🎓 Learning Resources

### GitHub Actions
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Workflow Syntax](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions)
- [Awesome Actions](https://github.com/sdras/awesome-actions)

### Testing
- [Jest Documentation](https://jestjs.io/)
- [Testing Best Practices](https://testingjavascript.com/)

### CI/CD Patterns
- [Continuous Integration by Martin Fowler](https://martinfowler.com/articles/continuousIntegration.html)
- [The Twelve-Factor App](https://12factor.net/)

---

## 🗺️ Learning Roadmap

### Week 1-2: Basics ✅
- [x] Set up basic CI workflow
- [x] Implement automated tests
- [x] Add linting

### Week 3-4: Intermediate 🚧
- [ ] Add code coverage reporting
- [ ] Implement caching
- [ ] Matrix builds (multiple Node versions)

### Week 5-6: Advanced 📋
- [ ] Security scanning
- [ ] Performance testing
- [ ] Deploy to staging environment

### Week 7+: Professional
- [ ] Multi-environment deployments
- [ ] Canary deployments
- [ ] Rollback strategies
- [ ] Monitoring & alerting

---

## 🤝 Contributing

This is a personal learning project, but suggestions are welcome!

If you're also learning CI/CD:
1. Fork this repository
2. Try implementing a feature from the roadmap
3. Submit a PR with what you learned

---

## 📝 Learning Log

### January 2024
- ✅ Created initial CI workflow
- ✅ Added Jest testing framework
- ✅ Configured ESLint

### February 2024
- ✅ Fixed CI workflow bugs
- ✅ Added code coverage
- 🚧 Exploring Codecov integration

### March 2024
- [ ] Planned: Docker integration
- [ ] Planned: Deploy to Render

---

## 🔗 Related Projects

**Production Projects:**
- **[CoreStack SaaS](https://github.com/DIYA73/corestack-saas)** - Uses Vercel CI/CD
- **[API Rate Guardian](https://github.com/DIYA73/api-rate-guardian)** - Deployed with GitHub Actions

**Learning Projects:**
- **[Secure Node API](https://github.com/DIYA73/secure-node-api)** - Security best practices

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**DIYA73**
- GitHub: [@DIYA73](https://github.com/DIYA73)
- LinkedIn: [linkedin.com/in/didi-86b00329a](https://www.linkedin.com/in/didi-86b00329a/)

---

## 💡 Lessons Learned

### What Worked Well
- GitHub Actions is intuitive and well-documented
- Jest integrates smoothly with Node.js
- Caching dependencies significantly speeds up workflows

### Challenges
- Understanding YAML syntax initially
- Debugging failed workflows (limited logs)
- Managing secrets securely

### Key Takeaways
- CI/CD is essential for modern development
- Automated testing catches bugs early
- Small, frequent commits work best

---

**⭐ If you're learning CI/CD too, star this repo and follow along!**

**🔄 Continuous improvement, one commit at a time.**

---

**Made with ❤️ for learning and growth**
