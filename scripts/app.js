Scraper = require("./scraper.js")
var argv = require("yargs").argv;

if(argv.a == 'url'){
	main = Scraper.Main()
}else if(argv.a == 'detail')
	main = Scraper.Detail()
	else
		console.log("Pas d'argument");
