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

- Given the context of the technical interview (A React Native / Node.js / Vue.js position), I assumed it was preferred that I use Javascript to perform the task. Note: Python was my first instinct since I studied data analytics as a submajor at UTS and am comfortable manipulating files/data with it, but decided against using it. 
- The application should be console based since the languages specified are typically used for backend
- All logs only follow the format given in the example:
`177.71.128.21 - - [10/Jul/2018:22:21:28 +0200] "GET /intranet-analytics/ HTTP/1.1" 200 3574`
- URLs are permitted to be a path such as `/intranet-analytics/` and aren't required to be a complete URL e.g. `https://www.example.net`
- The terms `most visited` and `most active` refer to the frequency in which an item occurs in a given log file, irrespective of the date or time accessed
- Most visited and most active URLS and IP Addresses can be tied first, second and third so this should be displayed to the user
- The URL `http://example.net/faq/` and `/faq/` were assumed to be the same url, so were summed together for the frequency count
- The status of a HTTP Request response does not matter (e.g `200`, `404`, `500`, `307`, `301`) and does not nullify most visited / most active counts
- Data from the log files does not need to be cleaned, an error should be displayed if it is invalid and it is up to the user to provide a valid log file
- The additional metadata at the end of the HTTP request is not relevant to the problem / task.

## Weaknesses in my code

Given more time, there are some things that I would fix:
- Adding additional validation / error handling - checking log file input validity, checking url validity, more stringent error handling everywhere
- Optimising code - particularly in the formatTopThreeResults() function, it's far from perfect in terms of Big O and elegancy / cleanliness
- Adding greater test coverage - currently the unit tests only cover the most basic testcases, I need to also build tests for unexpected inputs / edge cases etc. to ensure that my code is more robust
- Clarifying requirements with DigIO - particularly with "most visited" and "most active" terms as well as whether to include URLs with client error response codes (404), server error responses (500) and redirection messages (30X). Overall, I need to ensure that I am solving the end user's problem and not my own problem
- Continous integration tests - could have the tests run on Jenkins through GitHub or move code to GitLab and use their build in CI/CD
