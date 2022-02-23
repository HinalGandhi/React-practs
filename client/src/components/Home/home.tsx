import * as React from "react";
import App from "../App";
function Home(): JSX.Element {
    return (
        <div>
            <App />
            <div className="container my-4 text-center">
                <h2>Home</h2>
                <p>You have customer records</p>
            </div>
        </div>
    );
}
export default Home;