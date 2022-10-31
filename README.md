# DigIO Node.js Programming Task
Node.js HTTP Request Parsing task with ES6, Jest, ESLint, and Prettier

## Background

A Programming task assigned by DigIO for Parsing HTTP Requests from a log file.

## Scripts

```bash
# Run the project
npm start

# Check the lint errors
npm run lint

# Fix the lint errors
npm run lint:fix

# Run prettier
npm run format

# Check prettier errors
npm run format:check
```

## Assumptions

- All logs only follow the format given in the example:
`177.71.128.21 - - [10/Jul/2018:22:21:28 +0200] "GET /intranet-analytics/ HTTP/1.1" 200 3574`
- URLs can be a path like `/intranet-analytics/` and aren't required to be a complete URL e.g. `https://www.` etc
- The terms `most visited` and `most active` refer to the frequency in which an item occurs in a given log file, irrespective of the date or time accessed
- Data from the log files shouldn't need to be manipulated, an error should be displayed if invalid however the code does not need to fix that - it's up to the user to provide clean input




