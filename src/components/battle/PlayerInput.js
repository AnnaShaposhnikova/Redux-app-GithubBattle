import React from "react";

export const PlayerInput = ({ label, onSubmit }) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const username = event.target.getElementsByTagName("input")[0].value;
        onSubmit(username);
    };

    return (
        <form className="column" onSubmit={handleSubmit}>
            <label className="header" htmlFor="username">
                {label}
            </label>
            <input
                type="text"
                placeholder="Github Username"
                autoComplete="off"
            />
            <button className="button" type="submit">
                Submit
            </button>
        </form>
    );
};
