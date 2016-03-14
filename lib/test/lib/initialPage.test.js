'use strict';
const React = require('react');
const App = require('../../containers/App.js');
const Provider = require('react-redux').Provider;
const mount = require('enzyme').mount;
const test = require("tape");
const store = require('../../store/index.js')({time: Date.now()});

const jsdom = require('jsdom');
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;
global.document = doc;
global.window = win;

test('Time changes when button is pressed', function(t) {
  let component = mount(React.createElement(Provider, {store: store}, React.createElement(App, null)));
  let inputComponent = component.find('h1').text();
  let button = component.find('button');
  let nextComponent;

  let timeout = setTimeout(function(){
    button.simulate('click');
    nextComponent = component.find('h1').text();
    t.notEqual(inputComponent, nextComponent);
    t.end();
  }, 100);

});
