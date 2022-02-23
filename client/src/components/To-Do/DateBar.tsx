import * as React from "react";
const date: Date = new Date();
const curDate: number = date.getDate();
const month: string = date.toLocaleString("default", { month: "short" }).toLocaleUpperCase();
const day: string = date.toLocaleString("default", { weekday: "long" }).toLocaleUpperCase();
const year: number = date.getFullYear();

function DateBar(): JSX.Element {
    return (
        <div className="d-flex justify-content-between mb-3 align-items-center">
            <div className="row ml-2 align-items-center">
                <h1 className="col font-weight-bold p-0" style={{fontSize:"3rem"}}>{curDate}</h1>
                <span className="col justify-content-inline p-0">
                    <p className=" mt-1 text-muted p-1" style={{lineHeight:"1.2"}}>
                        {month}
                        <br />
                        {year}
                    </p>
                </span>
            </div>
            <p className="font-weight-bold mt-1 text-muted">{day}</p>
        </div>
    );
}

export default DateBar;
