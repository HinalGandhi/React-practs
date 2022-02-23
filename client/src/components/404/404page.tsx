import * as React from "react";
import App from "../App";
import {Link} from 'react-router-dom';

function Page(): JSX.Element {
    return (
        <div>
            <App />
            <div className="container my-4 text-center">
                <h2>404 Page</h2>
                <p>Page not found.</p>
                <Link to="/" className="btn btn-primary">
                Back To Home
            </Link>
            </div>
        </div>
    );
}
export default Page;