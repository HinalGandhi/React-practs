import * as React from "react";
import App from "./App";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
const date = new Date();
const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const data =[
    "Buy new sweatshirt",
    "Begin promotional phase",
   "Read an article",
    "Try not to fall asleep",
    "Watch 'Sherlock'",
    "Begin QA for the product",
    "Go for a walk"
]
function Feature(): JSX.Element {
  return (
    <div>
      <App />
      <div className="card container my-5" style={{ width: "20rem" }}>
        <div className="card-body">
          <div className="row flex">
          <h3 className="card-title col">{date.getDate()}</h3>
          <div className="col flex">
          <h6 className="card-title col">{month[date.getMonth()]}</h6>
          <h6 className="card-title col">{date.getFullYear()}</h6>
          </div>
          <h6 className="card-title col">{weekday[date.getDay()]}</h6>
          </div>
          <div className="row">

          </div>
          <ul>
                {data.map(function(name, index){
                    return <li className="d-flex" key={ index }><p>{name} <FontAwesomeIcon icon={faCheckCircle} style={{color:"green"}} /></p></li>;
                  })}
            </ul>
        </div>
      </div>
    </div>
  );
}
export default Feature;