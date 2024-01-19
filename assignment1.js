console.log('WEB700 - Web Server Simulator');

'use strict';

// Predefined arrays
var serverVerbs = ["GET", "GET", "GET", "POST", "GET", "POST"];
var serverPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout"];
var serverResponses = [
    "Welcome to WEB700 Assignment 1",
    "This assignment was prepared by Funmi Christianah Olupona",
    "[Funmi]: [folupona@myseneca.ca]",
    "User Logged In",
    "Main Panel",
    "Logout Complete"
];

// The httpRequest function
function httpRequest(httpVerb, path) {
    for (var i = 0; i < serverVerbs.length; i++) {
        if (serverVerbs[i] === httpVerb && serverPaths[i] === path) {
            return `200: ${serverResponses[i]}`;
        }
    }
    return `404: Unable to process ${httpVerb} request for ${path}`;
}

// Manual Testing
console.log(httpRequest("POST", "/logout")); // Should return "200: logout"
console.log(httpRequest("GET", "/about")); // Should return "200: This assignment was prepared by Oluwademilade Salami"

// Additional arrays for testing
var testVerbs = ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD"];
var testPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout", "/invalid", "/test"];

// Utility function to generate random integers
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

// Function to automate tests with truncation after a set number of tries
function automateTests() {
    var testCount = 0;
    var maxTests = 4; // Set the maximum number of tests here

    function randomRequest() {
        if (testCount >= maxTests) {
            clearInterval(testInterval);
            console.log('Automated testing completed.');
            return;
        }

        var randomVerb = testVerbs[getRandomInt(testVerbs.length)];
        var randomPath = testPaths[getRandomInt(testPaths.length)];
        var response = httpRequest(randomVerb, randomPath);
        console.log(`Request: ${randomVerb} ${randomPath} - Response: ${response}`);
        testCount++;
    }

    var testInterval = setInterval(randomRequest, 1000); // Calls randomRequest every second
}

// Running automated tests
automateTests();
