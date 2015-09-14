var React = require('react');
var Radium = require('radium');

var registrationForm = React.createClass(Radium.wrap({
  getDefaultProps: function() {
       return {
           fields: {
               "name": {
                   "name": "name",
                   "required": true
               },
               "email": {
                   "email": "email",
                   "required":true
               },
               "hardwareNeeded": {
                   "name": "description",
                   "required": false
               }
           }
       };
  },

  handleChange: function(event) {
   this.setState({value: event.target.value});
  },

  render: function() {
    var formElements = [];
    formElements.push(
     React.createElement("input", {
      type: "text", 
      value: this.props.fields.name, 
      onChange: this.handleChange, 
      required: true, 
      style: styles, 
      key: "form-name"}
      )
    );

    formElements.push(
     React.createElement("input", {
      type: "text", 
      value: this.props.fields.email, 
      onChange: this.handleChange, 
      required: true, 
      style: styles, 
      key: "form-email"}
      )
    );

    formElements.push(
     React.createElement("textarea", {
      type: "text", 
      value: this.props.fields.hardwareNeeded, 
      onChange: this.handleChange, 
      style: styles, 
      key: "form-hardwareDescription"}
      )
    );
  }
}));

var styles = {
  //need to implement some styling here for the form
  // basic CSS needed here. 
}

React.render(React.createElement("registrationForm", null), mountNode);