const express = require('express');
const app = express();
const path = require('path');

var port = process.env.PORT || 8080;
app.set("port", port);

var appPath = path.join(__dirname, '/../dist');
console.log('dirName =  ' + __dirname);
console.log('appPath =  ' + appPath);
app.use(express.static(appPath));
app.get('*', (req, res) => {
    res.sendFile(path.join(appPath, '/index.html'));
});
app.listen(port, () => console.log('Listening on port ' + port + ' !'));