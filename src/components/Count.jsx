import React, { Component, useContext } from 'react';
import { observer, inject, useObserver } from 'mobx-react';
import { StoreContext } from '../main'

export default function ReactionsCount() {
    const store = useContext(StoreContext)
    return useObserver(() => (
        <div className="row reactions-count" >
            <div className="col-sm" align="left">
                <i className="fa fa-thumbs-up" />{store.likesCount}
            </div>
            <div className="col-sm" align="right">
                3 comments
        </div>
        </div>
    ))
}