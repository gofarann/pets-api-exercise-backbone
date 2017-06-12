import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Pet from '../models/pet.js';


var PetView = Backbone.View.extend({
  initialize: function(params){
    this.template = params.template;
    this.listenTo(this.model, "change", this.render);

  },

  render: function(){
    var compiledTemplate = this.template({pet: this.model.toJSON()});
    this.$el.html(compiledTemplate);
    return this;
  },

  events: {
    "click": "selected",
    "click button.delete": 'deletePet'
  },

  selected: function(event){
    event.stopPropagation();
    var model = this.model;
    this.trigger("showDetails", model);
  },

  deletePet : function(){
    this.model.destroy();
  }

});

export default PetView;
