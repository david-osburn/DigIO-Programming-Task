# DigIO Node.js Programming Task
Node.js HTTP Request Parsing task with ES6, Jest, ESLint, and Prettier

## Background

A Programming task assigned by DigIO for Parsing HTTP Requests from a log file

## Scripts

```bash
# Run the project
npm start

# Run the tests
npm test

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
- URLs are permitted to be a path such as `/intranet-analytics/` and aren't required to be a complete URL e.g. `https://www.example.net`
- The terms `most visited` and `most active` refer to the frequency in which an item occurs in a given log file, irrespective of the date or time accessed
- The status of a HTTP Request response does not matter (e.g `200`, `404`, `500`, `307`, `301`) and does not nullify most visited / most active counts
- Data from the log files does not need to be cleaned, an error should be displayed if it is invalid and it is up to the user to provide a valid log file
- The additional metadata at the end of the HTTP request is not relevant to the problem / task