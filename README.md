# Playwright BlazeDemo

This repository contains automated tests for the BlazeDemo website using Playwright.

## Prerequisites

- Node.js v16 or higher
- npm v7 or higher

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/FrankAtencioLoreth/playwright-blazedemo.git
   cd playwright-blazedemo
    ```

2. Install dependencies
 ```bash
   npm install
 ```

# Usage

## Running Tests
To run the tests, use the following command:

```bash
npx playwright test
  ```
```bash
npx playwright test --ui
  ```

## Running a Specific Test
To run a specific test:

```bash
npx playwright test --grep @TC_001
  ```

## Running a Specific environment

```bash
 npm run env:qa => "cross-env test_env=qa npx playwright test"
 npm run env:dev => "cross-env test_env=development npx playwright test"
 npm run env:prod => "cross-env test_env=production npx playwright test"
```

# Viewing Test Results

After running tests, you can view the results:
```bash
  npx playwright show-report
```

# Environment Configuration
This project supports multiple environments. Set the test_env environment variable to specify which environment configuration to use

## Mac/Linux
```bash
export test_env=development
```
## Windows
```bash
set test_env=development
```

# Project structure
```
└── 📁playwright-blazedemo
    └── 📁.github
        └── 📁workflows
            └── playwright.yml
    └── 📁pages
        └── 📁locators
            └── BookingsLocators.ts
        └── BasePage.ts
        └── BookingsPage.ts
    └── 📁playwright-report
    └── 📁screnshots
    └── 📁test-results
    └── 📁tests
        └── BlazeDemoTest.spec.ts
    └── 📁utils
        └── Environment.ts
        └── GlobalSetup.ts
    └── .env.development
    └── .env.production
    └── .env.qa
    └── .gitignore
    └── package-lock.json
    └── package.json
    └── playwright.config.ts
```

You can add configurations in .env.<environment> files.

```rust
This Markdown-formatted README file provides the necessary information for setting up and using the Playwright test automation framework for the BlazeDemo project.

```
