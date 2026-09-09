# Assessment

Take-home assessment.

This is a simple Cucumber testing project built with Node.js and Cucumber.js to demonstrate behavior-driven development (BDD) by testing basic vegetable-counting logic.

## Setup

```bash
npm install
```

This will download and install all dependencies at the project level.

## Run Tests

```bash
npm test
```

## Development Notes

Cucumber can generate step-definition snippets for undefined steps in a feature file. This is especially helpful when a new feature file contains many undefined step definitions.

Run:

```bash
npx cucumber-js src/features/{YOUR-FEATURE-FILE}.feature
```

**Note:** The suggested step definitions are generated in the terminal. Copy the required snippets and add them to the appropriate step-definition file.
