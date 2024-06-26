import  { useState, useEffect } from "react";
import axios from "axios";

const Users = () => {
const [users, setUsers] = useState([]);

useEffect(() => {
    axios
    .get("http://localhost/backend/read.php")
    .then((response) => {
        setUsers(response.data);
    })
    .catch((error) => {
        console.error("There was an error fetching the users!", error);
    });
}, []);

return (
    <div>
    <h2>Users</h2>
    <ul>
        {users.map((user) => (
        <li key={user.id}>
            {user.name} - {user.email}
        </li>
        ))}
    </ul>
    </div>
);
};

export default Users;
