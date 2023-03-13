const assertEqual = require('../assertEqual');


assertEqual("Lighthouse Labs", "Bootcamp"); // => False
assertEqual("Blahaj", "Blahaj"); // => True
assertEqual(1, 1); // => True
assertEqual(1, 2); // => False