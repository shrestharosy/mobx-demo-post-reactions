import React, { useContext } from 'react';
import { StoreContext } from '../main';
import { useObserver } from 'mobx-react';

export default function Comments() {
    const store = useContext(StoreContext)
    return useObserver(() => (
        <table className="table">
            <tbody>
                {
                    store.comments.map((comment, index) => {
                        return (
                            <tr key={index}>
                                <td>
                                    {comment}
                                </td>
                            </tr>
                        )

                    })
                }
            </tbody>
        </table>
    )
    )
}