module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const AWS = require('aws-sdk-promise');
  AWS.config.loadFromPath('./aws.credentials.json');

  class GmailController extends Nodal.Controller {

    get() {

      this.respond({message: 'This is the gmail_controller'});

    }

    post(){

      const sqs = new AWS.SQS();
      let body = JSON.stringify(this.params.body);
      var that = this;

      sqs.createQueue({QueueName: 'gmail-channel'}).promise()
      .then(req => new AWS.SQS({params: {QueueUrl: req.data.QueueUrl}}))
      .then(queue => queue.sendMessage({ MessageBody: body }).promise())
      .then(res => that.respond(res.data))
      .catch(err => that.respond(err))
    }

  }

  return GmailController;

})();
