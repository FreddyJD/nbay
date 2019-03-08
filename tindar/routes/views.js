const path = require('path');
module.exports = (app) => {
    // Survay page rendering
    app.get('/exam', res => res.sendFile(path.join(__dirname + '/../public/exam.html')));
    // If we can't load survay, lets just send the index html 
	app.use(res =>  res.sendFile(path.join(__dirname + '/../public/index.html')));
}