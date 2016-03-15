'use strict';

var React = require('react');
var App = require('../../containers/App.js');
var Provider = require('react-redux').Provider;
var mount = require('enzyme').mount;
var test = require("tape");
var store = require('../../store/index.js')({ time: Date.now() });

var jsdom = require('jsdom');
var doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
var win = doc.defaultView;
global.document = doc;
global.window = win;

test('Time changes when button is pressed', function (t) {
  var component = mount(React.createElement(
    Provider,
    { store: store },
    React.createElement(App, null)
  ));
  var inputComponent = component.find('h1').text();
  var button = component.find('button');
  var nextComponent = void 0;

  var timeout = setTimeout(function () {
    button.simulate('click');
    nextComponent = component.find('h1').text();
    t.notEqual(inputComponent, nextComponent);
    t.end();
  }, 100);
});