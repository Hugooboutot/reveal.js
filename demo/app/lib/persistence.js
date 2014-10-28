'use strict';

var Backbone = require('backbone');

var PREFILLED = [
  { author: 'Bruce Willis', stamp: Date.UTC(1999, 3, 15, 17, 42),
    text:   'Descendez immédiatement de cette tête nucléaire !' },
  { author: 'Neo', stamp: Date.UTC(2000, 5, 4, 12, 21),
    text:   'What is the Matrix?' },
  { author: 'Brice de Nice', stamp: Date.UTC(2004, 8, 10, 11, 31),
    text:   'T’es comme le H de Hawaii : tu sers à rien !' },
  { author: 'Hubert Bonnisseur de la Batte', stamp: Date.UTC(2006, 2, 14, 21, 17),
    text:   'Comment est votre blanquette ?' },
  { author: 'Patrick Biales', stamp: Date.UTC(1998, 5, 22, 19, 31),
    text:   'Tu connais la différence entre une moule et un pullover ?' },
];

var Collection = require('backbone').Collection.extend({
  comparator: function(c1, c2) {
    return c2.get('stamp') - c1.get('stamp');
  }
});

var collection = module.exports = new Collection();
collection.reset(PREFILLED);

collection.on('add', function(model) {
  Backbone.Mediator.publish('checkins:new', model.toJSON());
});
