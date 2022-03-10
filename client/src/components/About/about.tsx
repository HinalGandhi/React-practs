import * as React from "react";
function About(): JSX.Element {
    return (
        <div className="container w-50 my-5">
            <div className="container my-4 text-center ">
                <h2>Deployment Links</h2>
                <h6>Understanding Deployment on various platform such as Azure, firebase and AWS. Added env files for production and staging. Understanding working of CI/CD.</h6>
            </div>
            <table className="table table-dark bg-light container ">
                <thead>
                    <tr>
                        <th scope="col">Sr No.</th>
                        <th scope="col">Platform</th>
                        <th scope="col">Demo Links</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Azure</td>
                        <td><a
                            href={"https://deploy-az.azurewebsites.net/"}
                            target="_blank"
                            rel="noreferrer"
                            className="font-normal text-xl mt-2 text-gray-200 hover:text-orange-400">
                            Live Demo
                        </a></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Netlify</td>
                        <td><a
                            href={"https://pract-7.netlify.app/"}
                            target="_blank"
                            rel="noreferrer"
                            className="font-normal text-xl mt-2 text-gray-200 hover:text-orange-400">
                            Live Demo
                        </a></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Vercel</td>
                        <td><a
                            href={"https://redux-pract-hinalgandhi.vercel.app/"}
                            target="_blank"
                            rel="noreferrer"
                            className="font-normal text-xl mt-2 text-gray-200 hover:text-orange-400">
                            Live Demo
                        </a></td>

                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Firebase</td>
                        <td><a
                            href={"https://my-first-deploy-39ac2.web.app/"}
                            target="_blank"
                            rel="noreferrer"
                            className="font-normal text-xl mt-2 text-gray-200 hover:text-orange-400">
                            Live Demo
                        </a></td>

                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td>Heroku</td>
                        <td><a
                            href={"https://my-first-deploy-39ac2.web.app/"}
                            target="_blank"
                            rel="noreferrer"
                            className="font-normal text-xl mt-2 text-gray-200 hover:text-orange-400">
                            Live Demo
                        </a></td>

                    </tr>
                </tbody>
            </table>
        </div >
    );
}
export default About;