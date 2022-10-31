function validateLogFile() {
  //TODO: Breakdown log file using regex, ensure all lines don't exceed a certain count
}

function validateUrls() {
  //TODO: Ask what constitutes a valid URL in this instance
  //Remove that '/' character
}

function validateIpAddresses(ipAddresses) {
  for (var line in ipAddresses) {
    if (
      /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
        ipAddresses[line]
      )
    ) {
      continue;
    } else {
      console.log(`Invalid IP Address on line ${line}`);
    }
  }
}

module.exports = { validateUrls, validateIpAddresses, validateLogFile };
