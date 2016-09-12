var mongoose = require('mongoose');
var mongoURI = 'mongodb://admin:admin@ds029106.mlab.com:29106/lowes';

module.exports = function() {

  mongoose.connect(mongoURI);

  mongoose.connection.once('open', function() {
    console.log('Connection to MongoDB successful!');
  });

};
