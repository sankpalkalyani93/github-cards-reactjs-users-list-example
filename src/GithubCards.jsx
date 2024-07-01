import React, { useEffect, useState } from "react";
import axios from "axios";
import CardList from "./CardList";

function GithubCards(){

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async() => {
            try{
                const response = await axios.get('https://api.github.com/users');
                setUsers(response.data);
            }
            catch(error){
                console.error("Error fetching data : ", error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <h2>Github User Card</h2>
            <CardList users={users} />
        </div>
    );
}

export default GithubCards;