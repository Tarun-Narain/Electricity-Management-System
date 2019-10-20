var AWS = require('aws-sdk');

module.exports ={
send: function(device, cost) { 
       var params = {
  Message: 'Your Device '+device+' has Crossed the Limit (Switched OFF).', /* required */
  PhoneNumber: '+917988078803',
};

AWS.config.update({accessKeyId:"<secret>",secretAccessKey:"<key>" ,region: 'us-west-2'});

// Create promise and SNS service object
var publishTextPromise = new AWS.SNS({apiVersion: 'latest'}).publish(params).promise();

// Handle promise's fulfilled/rejected states
publishTextPromise.then(
  function(data) {
    console.log("MessageID is " + data.MessageId);
  }).catch(
    function(err) {
    console.error(err, err.stack);
  });
}
}
