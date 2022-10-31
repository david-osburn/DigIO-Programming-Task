const { readFile, filterIpAddresses, filterUrls, findUnique, topThreeMostFrequent} = require("../src/functions.js");

describe("Reading log file tests", () => {
    var fileName = "./logs/programming-task-example-data.log";

    const mockData = [
        '177.71.128.21 - - [10/Jul/2018:22:21:28 +0200] "GET /intranet-analytics/ HTTP/1.1" 200 3574 "-" "Mozilla/5.0 (X11; U; Linux x86_64; fr-FR) AppleWebKit/534.7 (KHTML, like Gecko) Epiphany/2.30.6 Safari/534.7"',
        '168.41.191.40 - - [09/Jul/2018:10:11:30 +0200] "GET http://example.net/faq/ HTTP/1.1" 200 3574 "-" "Mozilla/5.0 (Linux; U; Android 2.3.5; en-us; HTC Vision Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1"',
        '168.41.191.41 - - [11/Jul/2018:17:41:30 +0200] "GET /this/page/does/not/exist/ HTTP/1.1" 404 3574 "-" "Mozilla/5.0 (Linux; U; Android 2.3.5; en-us; HTC Vision Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1"'
    ];
    
    test('Reading valid file', () => {
      expect(readFile(fileName).slice(0,3)).toEqual(mockData);
    });
})

describe("IP Address tests", () => {
    const mockData = [
        '177.71.128.21 - - [10/Jul/2018:22:21:28 +0200] "GET /intranet-analytics/ HTTP/1.1" 200 3574 "-" "Mozilla/5.0 (X11; U; Linux x86_64; fr-FR) AppleWebKit/534.7 (KHTML, like Gecko) Epiphany/2.30.6 Safari/534.7"',
        '168.41.191.40 - - [09/Jul/2018:10:11:30 +0200] "GET http://example.net/faq/ HTTP/1.1" 200 3574 "-" "Mozilla/5.0 (Linux; U; Android 2.3.5; en-us; HTC Vision Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1"',
        '168.41.191.41 - - [11/Jul/2018:17:41:30 +0200] "GET /this/page/does/not/exist/ HTTP/1.1" 404 3574 "-" "Mozilla/5.0 (Linux; U; Android 2.3.5; en-us; HTC Vision Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1"'
    ];

    test('Filter IP Addresses', () => {
      expect(filterIpAddresses(mockData)).toEqual(['177.71.128.21','168.41.191.40','168.41.191.41']);
    });
})

describe("URL tests", () => {
    const mockData = [
        '177.71.128.21 - - [10/Jul/2018:22:21:28 +0200] "GET /intranet-analytics/ HTTP/1.1" 200 3574 "-" "Mozilla/5.0 (X11; U; Linux x86_64; fr-FR) AppleWebKit/534.7 (KHTML, like Gecko) Epiphany/2.30.6 Safari/534.7"',
        '168.41.191.40 - - [09/Jul/2018:10:11:30 +0200] "GET http://example.net/faq/ HTTP/1.1" 200 3574 "-" "Mozilla/5.0 (Linux; U; Android 2.3.5; en-us; HTC Vision Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1"',
        '168.41.191.41 - - [11/Jul/2018:17:41:30 +0200] "GET /this/page/does/not/exist/ HTTP/1.1" 404 3574 "-" "Mozilla/5.0 (Linux; U; Android 2.3.5; en-us; HTC Vision Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1"'
    ];

    test('Filter URLs', () => {
      expect(filterUrls(mockData)).toEqual(['/intranet-analytics/','/faq/','/this/page/does/not/exist/']);
    });
})

describe("Calculating Number of Unique IP Address tests", () => {
    var mockIpAddresses = ['177.71.128.21','177.71.128.21','168.41.191.40','168.41.191.40','168.41.191.9'];

    test('Valid IP Address tests', () => {
      expect(findUnique(mockIpAddresses)).toBe(3);
    });
})

describe("Top Three Most Visited/Active tests", () => {
    var mockIpAddresses = ['177.71.128.21','177.71.128.21','168.41.191.40','168.41.191.40','168.41.191.9'];
    var mockUrls = ['/intranet-analytics/','/faq/','/this/page/does/not/exist/', '/intranet-analytics/','/faq/'];

    test('Top 3 Most visited URLs', () => {
      expect(topThreeMostFrequent(mockUrls)).toEqual({"/faq/": 2, "/intranet-analytics/": 2, "/this/page/does/not/exist/": 1});
    });

    test('Top 3 Most active IPs', () => {
        expect(topThreeMostFrequent(mockIpAddresses)).toEqual({ '177.71.128.21': 2, '168.41.191.40': 2, '168.41.191.9': 1 });
      });
})

