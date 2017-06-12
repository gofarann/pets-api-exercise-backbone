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
      console.log("In this.model.each");
      var petView = new PetView({
        model: pet,
        template: that.template,
        tagName: 'li'
      });

      that.$("#pet-list").append(petView.render().$el);
    });
    return this;

  }

});

export default PetListView;
