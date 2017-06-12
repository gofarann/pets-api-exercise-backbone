import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

import PetView from './pet_view';

var PetListView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
  },

  render: function(){
    this.$('.pet-list').empty();

    var that = this;

    this.model.each(function(pet){
      var petView = new PetView({
        model: pet,
        template: that.template
      });
      that.$('.pet-list').append(petView.render().el);

    });
  }

});

export default PetListView;
