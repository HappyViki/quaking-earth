var ghpages = require('gh-pages');
var homepage = require('./package.json').homepage

ghpages.publish('build', function(error) {
	if (err) {
		console.log("ERROR while publishing to gh-pages:", error);
	}
});

console.log("Site deployed at:", homepage);
