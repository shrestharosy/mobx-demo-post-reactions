import React from "react";
import { StoreContext } from '../main'

export default function Buttons() {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    return (
                        <div className="row">
                            {console.log(store)}
                            <div className="col-sm">
                                <button type="button" className="btn btn-light align-top" onClick={() => store.updateCount()}><i className="fa fa-thumbs-o-up" />Like</button>
                            </div>
                            <div className="col-sm">
                                <button type="button" className="btn btn-light"><i className="fa fa-comment-o" />Comment</button>
                            </div>
                        </div>
                    )
                }}
        </StoreContext.Consumer>
    );
}