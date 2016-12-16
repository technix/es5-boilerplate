var $ = require('jquery');

require('./style.css');

function HelloWorld(data) {
    this.prop1 = data;
    this.line1 = function line1() {
        this.append(this.prop1.join(';'));
    };
    this.append = function append(string) {
        $('#output').text(string);
    };
}

var hello = new HelloWorld(['test', 'data']);

hello.line1();
