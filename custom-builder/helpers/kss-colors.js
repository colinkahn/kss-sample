module.exports = function (Handlebars) {
  'use strict';

  Handlebars.registerHelper('kssColors', function (doc, block) {
    var output = [];
    var regex = /^(\S+)\s*:\s*(\S+)(?:\s*-\s*(.*))?$/gm;
    var test;

    while ((test = regex.exec(doc)) !== null) {
      this.color = {};
      this.color.name = test[1];
      this.color.hex = test[2];
      if (test[3] !== undefined) {
        this.color.description = test[3];
      }

      output.push(block.fn(this));
    }

    return output.join('');
  });
};
