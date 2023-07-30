# Use Case 10
Compose regular expressions to efficiently search, match, and manipulate text patterns

### Application description
This app contains of one screen where you can validated input string by the next criteria
- validate the maximum string length
- validate that the string contains at least one uppercase letter, one lowercase letter, one digit, and one special character from a predefined list: !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~.
- validate that the string does not contain any whitespace characters

### Regex implementation description
On the screen you have two inputs - one for string and another for max string length.
If you will not provide max string length - Infinity will be used by default.
First of all validation funtion checks is the input string is valid and size of it is in the limit.
Validation regex is implemented with Positive Lookahead to find required symbold in the string and also validate that all character in the string is non-whitespace character.

## Run the app
To run the application you need to
- install dependencies (npm install)
- run app localy (npm run start)
- go to http://localhost:3000/ to see the app
