import React from "react";

export default function Buttons() {
    return (
        <div className="row">
            <div className="col-sm">
                <button type="button" className="btn btn-light align-top"><i className="fa fa-thumbs-o-up" />Like</button>
            </div>
            <div className="col-sm">
                <button type="button" className="btn btn-light"><i className="fa fa-comment-o" />Comment</button>
            </div>
        </div>
    );
}