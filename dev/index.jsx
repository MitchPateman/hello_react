import React from "react";
import ReactDOM from "react-dom";
import LikesComponent from './LikesComponent.jsx';



var HelloWorld = React.createClass({
  render: function() {
    return (
      <p>Hello, {this.props.greetTarget}!</p>
    );
  }
});

ReactDOM.render(
  <div>
    <HelloWorld greetTarget="Batman"/>
    <HelloWorld greetTarget="Iron Man"/>
    <HelloWorld greetTarget="Nicolas Cage"/>
    <HelloWorld greetTarget="Mega Man"/>
    <HelloWorld greetTarget="Bono"/>
    <HelloWorld greetTarget="Catwoman"/>
    <HelloWorld greetTarget="Catherine Zeta Jones"/>
    <HelloWorld greetTarget="Steve Jobs"/>
    <LikesComponent />
  </div>,
  document.querySelector("#container")
);
