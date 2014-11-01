Scraper = require("./scraper.js")
var argv = require("yargs").argv;

if(argv.a == 'url'){
	main = Scraper.Main()
}else if(argv.a == 'detail')
	main = Scraper.Detail()
	else
		console.log("Veuillez passer l'argument '-a url' pour des données sommaire en remier puis avec '-a detail' pour avoir plus d'infos");
