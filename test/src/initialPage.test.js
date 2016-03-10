var React = require('react');
var App = require('../../lib/components/initialPage');
var shallow = require('enzyme').shallow;
var assert = require('assert');
var test = require("tape");

test('Providing no time prop', function(t) {
    var component = shallow(React.createElement(App, {name: 'Bob'}));
    var inputComponent = component.find('h1');
    t.equal(inputComponent.text(), 'Good Evening, Bob');
    t.end();
});

test('Providing a time prop', function(t) {
    var component = shallow(React.createElement(App, {name: 'Bob', time: 'Morning'}));
    var inputComponent = component.find('h1');
    t.equal(inputComponent.text(), 'Good Morning, Bob');
    t.end();
});
