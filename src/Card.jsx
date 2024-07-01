import React from "react";

const Card = ({ user }) => {

    return(
        <div className="github-cards">
            <img className="img" src={user.avatar_url} alt={user.login}/>
            <h3>{user.login}</h3>
            <p>{user.bio ? user.bio : "No bio available"}</p>
        </div>
    );
};

export default Card;