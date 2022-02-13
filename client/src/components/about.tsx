import * as React from "react";
import App from "./App";
function About(): JSX.Element {
    return (
        <div>
            <App />
            <div className="container my-4 text-center">
                <h2>About Us</h2>
                <p>This ia a About page</p>
            </div>
        </div>
    );
}
export default About;