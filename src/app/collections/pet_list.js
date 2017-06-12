import Backbone from 'backbone';

import Pet from 'app/models/pet.js';


var PetList = Backbone.Collection.extend({
  model: Pet,
  url: 'https://petdibs.herokuapp.com/pets'
});


export default PetList;
