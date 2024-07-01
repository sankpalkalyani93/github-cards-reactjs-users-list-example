import React from "react";
import Card from "./Card";

const CardList = ({ users }) => {
    return(
        <div className="card-list">
            {users.map(user => <Card key={user.id} user={user} />)}
        </div>
    );
}

export default CardList;