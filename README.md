# lexical-density
API for calculating lexical density of string.

To run this you need to run command:
npm install




POST /api/complexicity HTTP/1.1
Host: localhost:3000
Content-Type: application/json
Cache-Control: no-cache

{
"userInput": "Kim loves going to the cinema"
}

&& for verbose mode!

POST /api/complexicity HTTP/1.1
Host: localhost:3000
Content-Type: application/json
Cache-Control: no-cache

{
"userInput": "I will have the dinner.I do my homework daily on the way to school."
}