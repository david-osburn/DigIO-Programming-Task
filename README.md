# DigIO Node.js Programming Task
Node.js HTTP Request parsing task with ES6, Jest, ESLint, and Prettier

## Background

A programming task assigned by DigIO for parsing HTTP Requests from a log file

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

## Details

`src/`
- `index.js` - is the entry point for the program
- `functions.js` - contains the main logic for the program including parsing, finding unique IP Addresses, finding the top 3 most visited URLS and the top 3 most active IP Addresses
- `validations.js` - contains some validation functions for checking data in `functions.js`

`logs/`
- `programming-task-example-data.log` - a log file provided by DigIO, used as the basis for parsing and performing a variety of other functions

`__test__`
- `functions.test.js` - contains some basic unit tests for each function in `functions.js` using Jest


## Assumptions

- All logs only follow the format given in the example:
`177.71.128.21 - - [10/Jul/2018:22:21:28 +0200] "GET /intranet-analytics/ HTTP/1.1" 200 3574`
- URLs are permitted to be a path such as `/intranet-analytics/` and aren't required to be a complete URL e.g. `https://www.example.net`
- The terms `most visited` and `most active` refer to the frequency in which an item occurs in a given log file, irrespective of the date or time accessed
- The status of a HTTP Request response does not matter (e.g `200`, `404`, `500`, `307`, `301`) and does not nullify most visited / most active counts
- Data from the log files does not need to be cleaned, an error should be displayed if it is invalid and it is up to the user to provide a valid log file
- The additional metadata at the end of the HTTP request is not relevant to the problem / task
