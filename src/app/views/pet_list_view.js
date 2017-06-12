import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

import PetView from './pet_view.js';
import Pet from '../models/pet.js';

var PetListView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.listenTo(this.model, "update", this.render);
  },

  render: function(){
    this.$('#pet-list').empty();
    console.log("In PetListView Render");

    var that = this;

    this.model.each(function(pet){
      var petView = new PetView({
        model: pet,
        template: that.template,
        // tagName: 'li'
      });
      // console.log(petView.render().$el);

      that.$("#pet-list").append(petView.render().$el);
      that.listenTo(petView, 'showDetails', that.displayPet);
    });
    return this;

  },

  events: {
    "click #add-pet": "addPet",
  },

  displayPet: function(pet){
    this.$('#pet').empty();
    var petDetails = this.generateHTML(pet);
    console.log(petDetails);
    this.$('#pet').append(petDetails);
  },

  generateHTML:  function(pet){
    var petDetailsTemplate = _.template($('#pet-card-template').html());
    var generatedHTML = petDetailsTemplate({
      pet: {name: pet.get('name'), age: pet.get('age')
        // age: pet.get('age'),
        // breed: pet.get('breed'),
        // vaccinated: pet.get('vaccinated')
      }}
    );
    return generatedHTML;
  },

  addPet: function(){
    var formData = this.getFormData();
    var newPet = new Pet(formData);
    // this.model.add();
    this.model.create(newPet);

  },

  getFormData: function() {
    var formName = this.$("#name").val();
    this.$('#name').val('');

    var formAge = this.$("#age").val();
    this.$('#age').val('');

    var formBreed = this.$("#breed").val();
    this.$('#breed').val('');

    var formVaccinated = this.$('vaccinated-checkbox').is(":checked");
    this.$('#vaccinated-checkbox').prop('checked', false);

    return {
      name: formName,
      age: formAge,
      breed: formBreed

    };
  }

});

export default PetListView;
