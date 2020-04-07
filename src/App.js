import React from "react";
import "./styles.css";
import StateComponent from "./StateComponent";
import HooksComponent from "./HooksComponent";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.state = {
      title: "placeholder"
    };
  }

  handleChange(title) {
    this.setState({ title: title });
  }

  render() {
    const title = this.state.title;
    return (
      <div className="App">
        <h1>{title}</h1>
        <StateComponent handleSelected={this.handleChange} title={title} />
        <HooksComponent />
      </div>
    );
  }
}
