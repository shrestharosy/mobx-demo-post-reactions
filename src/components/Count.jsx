import React from 'react';
import { observer } from 'mobx-react';
import { StoreContext } from '../main'

@observer
export default class ReactionsCount extends React.Component {
    render() {
        return (
            <StoreContext.Consumer>
                {
                    (value) => {
                        return (
                            <div className="row reactions-count" >
                                <div className="col-sm" align="left">
                                    <i className="fa fa-thumbs-up" />{value.likesCount}
                                </div>
                                <div className="col-sm" align="right">
                                    3 comments
                                </div>
                            </div>
                        )
                    }
                }
            </StoreContext.Consumer >
        )
    }
}