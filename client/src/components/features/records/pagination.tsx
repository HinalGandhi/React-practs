import * as React from "react";
import * as Icon from "react-feather";

function Pagination(setPage: React.Dispatch<React.SetStateAction<number>>, page: number, total_pages: number): JSX.Element {
    return <div className="mb-4 container" style={{ width: "fit-content" }}>
        <button className="btn btn-light border" onClick={() => setPage(total_pages - 1)}>
            <Icon.ArrowLeft size={18} style={{ color: "rgba(0, 0, 0, 0.6)" }} />
        </button>
        <button className="btn btn-light" onClick={() => setPage(1)}>
            1
        </button>
        <button className="btn btn-light" onClick={() => setPage(2)}>
            2
        </button>
        <button className="btn btn-light border"
            onClick={() => setPage(total_pages)}
        >
            <Icon.ArrowRight size={18} style={{ color: "rgba(0, 0, 0, 0.6)" }} />
        </button>
    </div>;
}
export default Pagination;