import * as React from "react";
import App from "./App";
import DateBar from "./DateBar";
import TodoList from "./List";

class Feature extends React.Component{
  render(){
  return (
    <>
      <App />
      <div className="main ">
        <div className="container pb-5 mt-5 ">
          <div className="row justify-content-center">
            <div className="col-sm-3 col-md-6 col-lg-4">
              <div className="card fw-bold  box_style">
                <div className="m-5">
                  <DateBar />
                  <div className="col">
                    <TodoList />
                    <div className="position-relative d-flex justify-content-center">
                      <button className="position-absolute text-muted btn_Add ">
                        +
                      </button>
                    </div>
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
