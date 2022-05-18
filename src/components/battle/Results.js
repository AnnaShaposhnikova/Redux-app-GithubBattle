import React, { useEffect, useState, Fragment } from "react";
import { Player } from "./Player";
import { Spinner } from "../spinner/Spinner";
import { battle } from "../../utils/api";

export const Results = (props) => {
    const [winner, setWinner] = useState(null);
    const [looser, setLooser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const searchParams = new URLSearchParams(props.location.search);
        const playerOneName = searchParams.get("playerOneName");
        const playerTwoName = searchParams.get("playerTwoName");

        setLoading(true);
        battle([playerOneName, playerTwoName])
            .then(([winner, looser]) => {
                //преходят отсортированные игроки, деструктуризируем
                if (winner && looser) {
                    setWinner(winner);
                    setLooser(looser);
                } else {
                    setError("Looks like this is an error. Check both users!");
                }
            })
            .finally(setLoading(false));
    }, []);

    if (error) {
        return <h3>{error.message}</h3>;
    }

    if (loading) {
        return <Spinner />;
    }

    return (
        <div className="row">
            {winner && looser && (
                <Fragment>
                    <Player
                        label="Winner"
                        score={winner.score}
                        profile={winner.profile}
                    />
                    <Player
                        label="Looser"
                        score={looser.score}
                        profile={looser.profile}
                    />
                </Fragment>
            )}
        </div>
    );
};
