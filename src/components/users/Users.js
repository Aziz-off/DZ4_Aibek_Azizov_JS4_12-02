import React from "react";

function Users (props) {


    return (
        <ul>
            {
                props.users.map((user, key) => {
                    return (
                        <li style={{marginBottom: "30px"}} key={key}>{user}</li>
                    )
                })
            }

        </ul>
    )
}


export default Users;