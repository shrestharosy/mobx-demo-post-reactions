import React, { useContext } from 'react';
import { StoreContext } from '../main';

export default function Comments() {
    const store = useContext(StoreContext)
    return (
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
}