import React from "react";
import Display from "./Display";
import Button from "./Button";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: props.count };
    this.plus = this.plus.bind(this);
  }

  handleClick(event) {
    console.log(this);

    if (event.target.value === "+") {
      this.plus();
    } else if (event.target.value === "-") {
      this.minus();
    }
  }

  plus() {
    console.log(this);

    // return an object `({ count: state.count + 1 })` without return keyword
    this.setState(state => ({ count: state.count + 1 }));
  }

  minus = () => {
    console.log(this);

    this.setState(state => {
      return { count: state.count - 1 };
    });
  };

  render() {
    // 4 ways of binding
    // this.plus.bind(this) in the constructor and declaring method with arrow function is preferred
    // console.log(this);

    const displayClass = `counter__input ${
      this.state.count >= 0
        ? "counter__input--positive"
        : "counter__input--negative"
    }`;

    return (
      <div className="button-row">
        <Display displayClass={displayClass} count={this.state.count} />
        <Button text="+" className="counter__button" onClick={this.plus} />
        <Button text="-" className="counter__button" onClick={this.minus} />
        {/*
        <input value="1" onClick={this.handleClick} className="test" readOnly />
        <input
          value="2"
          onClick={this.handleClick.bind(this)}
          className="test"
          readOnly
        />*/}
      </div>
    );
  }
}

export default Counter;
