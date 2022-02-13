import * as React from "react";

export function Image(): JSX.Element {
    const [data, setPhotosResponse] = React.useState(null);

    React.useEffect(() => {
        fetch("https://source.unsplash.com/featured?technology")
            .then((result): void => {
                setPhotosResponse(result);
            })
            .catch(() => {
                console.log("something went wrong!");
            });
    }, []);

    if (data === null) {
        return <div>Loading...</div>;
    } else if (data.errors) {
        return (
            <div>
                <div>{data.errors[0]}</div>
            </div>
        );
    } else {
        return (
            <div className="container" style={{height:"70vh"}}>
                <img className="img-fluid" style={{height:"100%"}} src={data.url}></img>
            </div>
        );
    }
}
