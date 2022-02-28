import * as React from "react";
import DateBar from "./DateBar";
import TodoList from "./List";
import Addactivity from "./Addactivity";

class Feature extends React.Component<{}, any> {
  constructor(props: {}) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.escFunction = this.escFunction.bind(this);
  }
  handleClick(): void {
    this.setState((prevState: { isToggleOn: any }) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }
  escFunction(event: { key: string }): void {
    if (event.key === "Escape") {
      this.setState(() => ({
        isToggleOn: true,
      }));
    }
  }
  componentDidMount(): void {
    document.addEventListener("keydown", this.escFunction, false);
  }
  //To-do List
  render(): JSX.Element {
    return (
      <>
        <div className="main ">
          <div className="container pb-5 mt-5 ">
            <div className="row justify-content-center">
              <div className="col-sm-3 col-md-6 col-lg-4">
                <div className="card fw-bold  box_style">
                  <div className="m-5">
                    <DateBar />
                    <div className="col list">
                      <TodoList />
                    </div>
                    {this.state.isToggleOn ? <></> : <Addactivity />}
                    <div className="position-relative d-flex justify-content-center">
                      <button
                        className="position-absolute text-muted btn_Add "
                        onClick={this.handleClick}
                        style={{
                          display: this.state.isToggleOn ? "block" : "none",
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Feature;
