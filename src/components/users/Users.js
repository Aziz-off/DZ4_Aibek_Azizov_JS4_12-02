import React from "react";

function Users (props) {


    return (
        <ul>
            {
                props.users.map((user, key) => {
                    return (
                        <li style={{marginBottom: "35px"}} key={key}>{user}</li>
                    )
                })
            }

        </ul>
    )
}


export default Users;