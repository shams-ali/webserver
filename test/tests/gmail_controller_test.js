module.exports = (() => {

  'use strict';

  const Nodal = require('nodal');

  class GmailControllerTest extends Nodal.mocha.Test {

    test(expect) {

      it('Should return an HTTP 200', done => {

        this.endpoint('/channels/gmail').get((status, headers, body, json) => {

          expect(status).to.equal(200);
          done();

        });

      });

    }

  }

  return GmailControllerTest;

})();
