import React from "react";
import PropTypes from "prop-types";
class HelloWorld extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      on: false
    };
  }
  toggleOnOff = () => {
    this.setState(prevState => ({ on: !prevState.on }));
  };
  render() {
    return (
      <React.Fragment>
        <p>Greeting: {this.props.greeting}</p>
        <button onClick={this.toggleOnOff}>
          {this.state.on ? "on" : "off"}
        </button>
      </React.Fragment>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default HelloWorld;
