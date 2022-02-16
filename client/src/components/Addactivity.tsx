import * as React from "react";

function Addactivity (): JSX.Element{
return(
    <>
    {console.log("here")}
    <div className="col-md-16 inp">
    <label htmlFor="validationDefault01" className="form-label">Add Activity</label>
    <input type="text" className="form-control col-lg-12" id="validationDefault01" placeholder="Enter Activity..." required />
    </div>
    </>
)
}
export default Addactivity;