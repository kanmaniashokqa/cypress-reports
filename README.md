## Cypress Test Suite - Check24 portal
This repository contains automated tests for the Check24 website using Cypress with Mochawesome reporting.
The test script chooses random tarrifs from providers and does a comparison
Prerequisites
## Before running the tests, make sure you have the following installed:

Node.js (version 12 or higher)
npm (usually comes with Node.js)
Git
Cypress

## Installation

Clone the repository:
git clone https://github.com/your-username/check24-cypress-tests.git

Navigate to the project directory:
cd check24-cypress-tests

Install the dependencies:
npm install cypress --save-dev
npm install --save-dev cypress cypress-mochawesome-reporter mochawesome mochawesome-merge mochawesome-report-generator


## Running the Tests
You can run the tests in several ways:
Run all tests headlessly
To run all tests in headless mode:
npm run test
Run tests in headed mode
To run tests with the Cypress Test Runner:
npm run cypress:open
Run tests and generate Mochawesome report
To run tests and generate a Mochawesome report:
npm run test:report
After running this command, you can find the HTML report in the cypress/reports directory.
Configuration




