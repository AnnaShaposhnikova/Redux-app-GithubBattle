import React from "react";
import { connect } from "react-redux";
import { SelectedLanguages } from "./SelectedLanguages";
import { Repos } from "./Repos";
import { setSelectedLanguage, setReposToNull} from "../../redux/actions/popular.actions"
import {FetchPopularReposThunk} from "../../thunk/popular.thunk";

const mapStateToProps = ({popularReducer}) => ({
   selectedLanguage: popularReducer.selectedLanguage,
    repos: popularReducer.repos,
    error: popularReducer.error,
});

class PopularPage extends React.Component {
    constructor(props) {
        super(props);
        this.fetchHandler = this.fetchHandler.bind(this);
        this.selectLanguage = this.selectLanguage.bind(this);
    }

    selectLanguage(language) {
        if (language !== this.props.selectedLanguage && this.props.repos){
            this.props.dispatch(setSelectedLanguage(language));
            this.props.dispatch(setReposToNull());
            this.fetchHandler(language);
        }
    }

    fetchHandler(language) {
        this.props.dispatch(FetchPopularReposThunk(language));
    }

    componentDidMount() {
        this.fetchHandler(this.props.selectedLanguage);
    }

    render() {
        if (this.props.error) {
            return <h1>{this.props.error}</h1>;
        } else {
            return (
                <div>
                    <SelectedLanguages
                       selectLanguageHandler={this.selectLanguage}
                    />
                    <Repos />
                </div>
            );
        }
    }
}
export default connect(mapStateToProps)(PopularPage);
