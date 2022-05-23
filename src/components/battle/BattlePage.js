import React from "react";
import { PlayerInput } from "./PlayerInput";
import { Link } from "react-router-dom";
import { PlayerPreview } from "./PlayerPreview";
import {connect} from "react-redux";
import {setPlayerOneImage, setPlayerOneName, setPlayerTwoName,setPlayerTwoImage} from "../../redux/actions/battle.actions";

const mapStateToProps = ({battleReducer}) => ({
    playerOneName: battleReducer.playerOneName,
    playerTwoName: battleReducer.playerTwoName,
    playerOneImage: battleReducer.playerOneImage,
    playerTwoImage: battleReducer.playerTwoImage,
})

class BattlePage extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmitPlayerOne = this.handleSubmitPlayerOne.bind(this);
        this.handleSubmitPlayerTwo = this.handleSubmitPlayerTwo.bind(this);
    }

    handleSubmitPlayerOne(username) {
        this.props.dispatch(setPlayerOneName(username));
        this.props.dispatch(setPlayerOneImage(`https://github.com/${username}.png?size200`));
    }

    handleSubmitPlayerTwo(username) {
        this.props.dispatch(setPlayerTwoName(username));
        this.props.dispatch(setPlayerTwoImage(`https://github.com/${username}.png?size200`));
    }

    handleResetPlayerOne() {
        this.props.dispatch(setPlayerOneName(""));
       this.props.dispatch(setPlayerTwoImage(null));
    }

    handleResetPlayerTwo() {
        this.props.dispatch(setPlayerTwoName(""));
        this.props.dispatch(setPlayerTwoImage(null));
    }

    render() {
        const match = this.props.match;

        return (
            <div>
                <div className="row">
                    {!this.props.playerOneName ? (
                        <PlayerInput
                            label="Player One"
                            onSubmit={this.handleSubmitPlayerOne}
                        />
                    ) : (
                        <PlayerPreview
                            username={this.props.playerOneName}
                            avatar={this.props.playerOneImage}
                        >
                            <button
                                className="reset"
                                onClick={this.handleResetPlayerOne.bind(
                                    this,
                                    "playerOne"
                                )}
                            >
                                Reset
                            </button>
                        </PlayerPreview>
                    )}
                    {!this.props.playerTwoName ? (
                        <PlayerInput
                            label="Player Two"
                            onSubmit={this.handleSubmitPlayerTwo}
                        />
                    ) : (
                        <PlayerPreview
                            username={this.props.playerTwoName}
                            avatar={this.props.playerTwoImage}
                        >
                            <button
                                className="reset"
                                onClick={this.handleResetPlayerTwo.bind(
                                    this,
                                    "playerTwo"
                                )}
                            >
                                Reset
                            </button>
                        </PlayerPreview>
                    )}
                </div>
                {this.props.playerOneName && this.props.playerTwoName && (
                    <Link
                        className="button"
                        to={{
                            pathname: `${match.url}/results`,
                            search: `?playerOneName=${this.props.playerOneName}&playerTwoName=${this.props.playerTwoName}  `,
                        }}
                    >
                        Battle
                    </Link>
                )}
            </div>
        );
    }
}

export default connect(mapStateToProps)(BattlePage);
