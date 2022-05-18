import React, { memo } from "react";
import { Spinner } from "../spinner/Spinner";

export const Repos = memo(({ repos }) => {
    if (!repos) {
        return <Spinner />;
    } else {
        return (
            <ul className="popular-list">
                {repos.map((repo, index) => {
                    return (
                        <li key={repo.id} className="popular-item">
                            <div className="popular-rank">#{index + 1}</div>
                            <ul className="space-list-items ">
                                <li>
                                    <img
                                        className="avatar"
                                        src={repo.owner.avatar_url}
                                        alt="repo_avatar"
                                    ></img>
                                </li>
                                <li>
                                    <a href={repo.html_url}>{repo.name}</a>
                                </li>
                                <li>@{repo.owner.login}</li>
                                <li>{repo.owner.stargazers_counter}</li>
                            </ul>
                        </li>
                    );
                })}
            </ul>
        );
    }
});
