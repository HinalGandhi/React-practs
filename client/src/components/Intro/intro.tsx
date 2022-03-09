import * as React from "react";
import { Image } from "./Image";

function Intro(): JSX.Element {
  function refresh(): void {
    // re-renders the component
    window.location.reload();
  }
  return (
    <div>
      <div className="container my-4 text-center">
        <h2>Random Pic</h2>
        <p>This is a random pic generator!</p>
        <Image />
        <button className="btn btn-primary my-4 " onClick={refresh}>
          {" "}
          Tap to change image!{" "}
        </button>
      </div>
    </div>
  );
}
export default Intro;
