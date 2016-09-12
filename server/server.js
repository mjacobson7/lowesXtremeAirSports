var app = require('./config/express.js')();
require('./config/database.js')();
var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('The magic happens on port ' + port);
});
