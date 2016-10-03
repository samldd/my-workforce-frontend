import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('welcome');

  this.route('skills', function() {
    this.route('skill', {path: ':id'}, function () {
      this.route('timeline');
    });
  });

  this.route('occupations', function() {
    this.route('occupation', {path: ':id'}, function () {
      this.route('bubble');
    });
  });

  this.route('improvements');

  this.route('projects', function() {
    this.route('edit', {path: '/edit/:pid'});
  });

  this.route('projectSkill');
});

export default Router;
