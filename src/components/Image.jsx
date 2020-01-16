import React from "react";

export default function Image() {
    return (
        <div className="card">
            <img src="https://picsum.photos/400/400" className="card-img-top" alt="..." />
            <div className={"reactions-count"} align="left">
                <i class="fa fa-thumbs-up" />22
            </div>
            <div className="card-body">
                <div class="row">
                    <div class="col-sm">
                        <button type="button" className="btn btn-light"><i className="fa fa-thumbs-o-up" />Like</button>
                    </div>
                    <div class="col-sm">
                        <button type="button" className="btn btn-light"><i className="fa fa-comment-o" />Comment</button>
                    </div>
                </div>
            </div>
        </div>
    );
}