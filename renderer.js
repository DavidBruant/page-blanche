// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

var React = require('react');
var ReactDOM = require('react-dom');
var RichTextEditor = require('react-rte');

RichTextEditor = typeof RichTextEditor === 'function' ? RichTextEditor : RichTextEditor.default; // for

var PageBlancheEditor = React.createClass({
  propTypes: {
    onChange: React.PropTypes.func
  },

  getInitialState: function() {
    return {
      value: RichTextEditor.createEmptyValue()
    };
  },

  render: function() {
    return React.createElement(RichTextEditor, {
      value: this.state.value,
      onChange: this.onChange
    });
  },

  onChange: function(value) {
    this.setState({value: value});
    if (this.props.onChange) {
      // Send the changes up to the parent component as an HTML string.
      // This is here to demonstrate using `.toString()` but in a real app it
      // would be better to avoid generating a string on each change.
      this.props.onChange(
        value.toString('html')
      );
    }
  }

});

console.log('PageBlancheEditor', PageBlancheEditor, RichTextEditor)

ReactDOM.render(
    React.createElement(
        PageBlancheEditor
    ),
    document.body
);