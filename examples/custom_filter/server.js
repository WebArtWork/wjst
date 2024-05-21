const http = require("http"),
	wjst = require(__dirname + "/../../index");

http.createServer(function (req, res) {
	wjst.setFilter('map', (array, func) => {
		if (Array.isArray(array) && typeof func === 'function') {
			array = array.map(func);
			return array.filter(item => item !== undefined);
		} else {
			return array;
		}
	});
	const tmpl = wjst.compileFile(__dirname + "/page.html"),
		renderedHtml = tmpl({
			people: [
				{ name: "Paul", test: 28 },
				{ name: "Jane", test: 26 },
				{ name: "Jimmy", test: 45 },
			],
			title: "Basic Example",
		});

	res.writeHead(200, { "Content-Type": "text/html" });
	res.end(renderedHtml);
}).listen(1337);

console.log("Application Started on http://localhost:1337/");
