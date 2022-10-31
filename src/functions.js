var fs = require("fs");
const { validateUrls, validateIpAddresses } = require("./validations.js");

function readFile(filename) {
  const contents = fs.readFileSync(filename, "utf-8");
  const lines = contents.split("\n");
  const filteredLines = lines.filter(a => a);

  return filteredLines;
}

function filterUrls(linesInFile) {
  const urls = [];

  if (linesInFile) {
    for (var line in linesInFile) {
      let url = linesInFile[line].split(" ")[6];
      urls.push(url);

      if (!url.startsWith("/")) {
        url = url.split(".", 2)[1].split("/", 2)[1];
        url = "/" + url + "/";
        urls[line] = url;
      }
    }
  }

  validateUrls(urls);

  return urls;
}

function filterIpAddresses(linesInFile) {
  const ipAddresses = [];

  if (linesInFile) {
    for (var line in linesInFile) {
      ipAddresses.push(linesInFile[line].split(" ")[0]);
    }
  }

  validateIpAddresses(ipAddresses);

  return ipAddresses;
}

function findUnique(ipAddresses) {
  console.log(
    "\x1b[36m%s\x1b[0m",
    "Number of Unique IP Addresses",
    `\n${new Set(ipAddresses).size}`
  );
  return new Set(ipAddresses).size;
}

function topThreeMostFrequent(array) {
  let frequency = {};

  for (let num of array) {
    if (!frequency[num]) {
      frequency[num] = 0;
    }
    frequency[num]++;
  }

  var frequencyArray = Object.entries(frequency);

  var sortedFrequencyArray = frequencyArray.sort((a, b) => {
    return b[1] - a[1];
  });

  var sortedFrequencyObject = Object.fromEntries(sortedFrequencyArray);

  formatTopThreeResults(sortedFrequencyObject);

  return sortedFrequencyObject;
}

function formatTopThreeResults(sortedObject) {
  var highestValue = 0;
  var secondHighestValue = 0;
  var thirdHighestValue = 0;

  var mostCommonOccurrences = [];
  var secondMostCommonOccurrences = [];
  var thirdMostCommonOccurrences = [];

  for (var property in sortedObject) {
    if (sortedObject[property] > highestValue) {
      highestValue = sortedObject[property];
      mostCommonOccurrences.push(property);
    } else if (sortedObject[property] == highestValue) {
      mostCommonOccurrences.push(property);
    }

    if (
      sortedObject[property] > secondHighestValue &&
      sortedObject[property] < highestValue
    ) {
      secondHighestValue = sortedObject[property];
      secondMostCommonOccurrences.push(property);
    } else if (
      sortedObject[property] == secondHighestValue &&
      sortedObject[property] < highestValue
    ) {
      secondMostCommonOccurrences.push(property);
    }

    if (
      sortedObject[property] > thirdHighestValue &&
      sortedObject[property] < secondHighestValue
    ) {
      thirdHighestValue = sortedObject[property];
      thirdMostCommonOccurrences.push(property);
    } else if (
      sortedObject[property] == thirdHighestValue &&
      sortedObject[property] < secondHighestValue
    ) {
      thirdMostCommonOccurrences.push(property);
    }
  }

  if (
    mostCommonOccurrences[0].startsWith("/") ||
    mostCommonOccurrences[0].startsWith("h")
  ) {
    console.log("\x1b[36m%s\x1b[0m", "\nTop 3 Most Visited URLs");
  } else {
    console.log("\x1b[36m%s\x1b[0m", "\nTop 3 Most Active IP Addresses");
  }

  console.log("\n1st:");
  if (mostCommonOccurrences.length !== 0) {
    for (var element in mostCommonOccurrences) {
      console.log(mostCommonOccurrences[element]);
    }
  } else {
    console.log("N/A");
  }

  console.log("\n2nd:");
  if (secondMostCommonOccurrences.length !== 0) {
    for (element in secondMostCommonOccurrences) {
      console.log(secondMostCommonOccurrences[element]);
    }
  } else {
    console.log("N/A");
  }

  console.log("\n3rd:");
  if (thirdMostCommonOccurrences.length !== 0) {
    for (element in thirdMostCommonOccurrences) {
      console.log(thirdMostCommonOccurrences[element]);
    }
  } else {
    console.log("N/A");
  }
}

module.exports = {
  readFile,
  filterIpAddresses,
  filterUrls,
  findUnique,
  topThreeMostFrequent
};
