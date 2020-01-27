import React, { useContext } from 'react';
import { useObserver } from 'mobx-react';
import { StoreContext } from '../main'

export default function Count() {
    const store = useContext(StoreContext)
    return useObserver(() => (
        <div className="row reactions-count" >
            <div className="col-sm" align="left">
                <i className="fa fa-thumbs-up" />{store.likesCount}
            </div>
            <div className="col-sm" align="right">
                {store.commentsCount} comments
        </div>
        </div>
    ))
}