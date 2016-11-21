import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('contacts', { path: '/' }, function(){
    this.route('contact', {path: ':id'}, function(){
      this.route('show');
      this.route('edit');
    });
    this.route('new');
  });
});

export default Router;
