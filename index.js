'use strict';

var assert = require('better-assert');

var _ = require('lodash');

var Config = function () {
  this.data = {
    'development': require('./config/development'),
    'test': require('./config/development'),
    'staging': require('./config/development'),
    'production': require('./config/development')
  };
};

Config.prototype.set = function (env, key, val) {
  assert(typeof this.data[env] !== 'undefined');
  assert(typeof key === 'string');

  this.data[env][key] = val;
};

Config.prototype.merge = function (env, data) {
  assert(typeof this.data[env] !== 'undefined');
  assert(data);

  _.merge(this.data[env], data);
};

Config.prototype.get = function (key) {
  assert(typeof this.data[process.env.NODE_ENV] !== 'undefined');

  if (!key) {
    return this.data[process.env.NODE_ENV];
  }
  return this.data[process.env.NODE_ENV][key];
};

module.exports = new Config();