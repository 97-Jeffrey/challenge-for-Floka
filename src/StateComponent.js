import React from "react";

/**
 * @todo - 1: Add a functionality that allows a user to dynamically add items to the dropdown list
 * @todo - 2: Generate and display a list of every previous selected item in the dropdown (including the dynamically created ones)
 * @todo - 3: Display the number of times each option in the list has been selected (including the dynamically created ones)
 */

export default class StateComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: ["first", "second", "third"]
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.handleSelected(e.target.value);
  }

  render() {
    const title = this.props.title;
    return (
      <form className="dropdown">
        <label for="selector">{this.state.selected}</label>
        <select
          name="selector"
          id="selector"
          value={title}
          onChange={this.handleChange}
        >
          {this.state.options.map(i => {
            return <option value={i}>{i}</option>;
          })}
        </select>
      </form>
    );
  }
}
