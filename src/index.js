const {
  readFile,
  filterIpAddresses,
  filterUrls,
  findUnique,
  topThreeMostFrequent
} = require("./functions.js");

const fileName = "./logs/programming-task-example-data.log";
const linesInFile = readFile(fileName);
const ipAddresses = filterIpAddresses(linesInFile);
const urls = filterUrls(linesInFile);

findUnique(ipAddresses);
topThreeMostFrequent(ipAddresses);
topThreeMostFrequent(urls);
