import React from "react";
import user from "../images/user.png";

const ContactCard = (props) => {
    const { id, name, email } = props.contact;
    return (
        <div className="item" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px" }}>
            <div className="content" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px" }}>
                <img className="ui avatar image" src={user} alt="user" />
                <div>
                    <div className="header">{name}</div>
                    <div>{email}</div>
                </div>
            </div>
            <i className="trash alternate outline icon" style={{ color: "red", marginTop: "7px", float: "right" }}>
            </i>

        </div>

    );
};

export default ContactCard;