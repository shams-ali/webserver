module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');

  class RecipeController extends Nodal.Controller {

    get() {

      this.respond({message: 'This is the gmail_controller'});

    }

    post(){
      let body = JSON.stringify(this.params.body);
    }

  }

  return RecipeController;

})();
