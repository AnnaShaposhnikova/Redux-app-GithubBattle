import React, { useEffect, useState, Fragment } from "react";
import { Player } from "./Player";
import { Spinner } from "../spinner/Spinner";
import { battle } from "../../utils/api";
import {useSelector, useDispatch} from "react-redux";
import {setLoading, setError, setWinner, setLooser} from "../../redux/actions/battle.actions";

export const Results = (props) => {
    const winnerFromState = useSelector(state => state.battleReducer.winner);
    const looserFromState = useSelector(state => state.battleReducer.looser);
    const loadingFromState = useSelector(state => state.battleReducer.loading);
    const errorFromState = useSelector(state => state.battleReducer.error);
    const dispatch = useDispatch();

    useEffect(() => {

        const searchParams = new URLSearchParams(props.location.search);
        const playerOneName = searchParams.get("playerOneName");
        const playerTwoName = searchParams.get("playerTwoName");

        dispatch(setLoading(true));


        battle([playerOneName, playerTwoName])
            .then(([winner, looser]) => {

                //преходят отсортированные игроки, деструктуризируем
                if (winner && looser) {
                    dispatch(setWinner(winner));
                   dispatch(setLooser(looser)) ;
                } else {
                    dispatch(setError("Looks like this is an error. Check both users!"));
                }
            })
            .catch(error => {

                dispatch(setError(error.message));
            })
            .finally(()=> dispatch(setLoading(false)));
    }, []);

    if (errorFromState) {
        return <h3>{errorFromState}</h3>;
    }

    if (loadingFromState) {
        return <Spinner />;
    }

    return (

        <div className="row">
            {winnerFromState && looserFromState && (
                <Fragment>
                    <Player
                        label="Winner"
                        score={winnerFromState.score}
                        profile={winnerFromState.profile}
                    />
                    <Player
                        label="Looser"
                        score={looserFromState.score}
                        profile={looserFromState.profile}
                    />
                </Fragment>
            )}
        </div>
    );
};
