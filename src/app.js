import $ from 'jquery';
import _ from 'underscore';

import Pet from './app/models/pet.js';
import PetList from 'app/collections/pet_list';
import PetView from './app/views/pet_view.js';
import PetListView from 'app/views/pet_list_view';

var myPetList = new PetList();
myPetList.fetch();

var myPetListView = new PetListView({
  model: myPetList,
  template: _.template($('#pet-card-template').html()),
  el: 'main'
});



$(document).ready(function() {
  myPetListView.render();
});
