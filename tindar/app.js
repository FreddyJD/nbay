
const express = require('express'); 
const bodyParser = require('body-parser');

const viewsRoutes = require('./routes/views');
const apiRoutes = require("./routes/api");

const app = express();
const PORT = process.env.PORT || 8888;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewsRoutes(app);
apiRoutes(app);

app.listen(PORT, () => console.log(PORT));