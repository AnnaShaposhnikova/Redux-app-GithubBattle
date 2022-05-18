import React from "react";
import { FetchPopularRepos } from "../../utils/api";
import { SelectedLanguages } from "./SelectedLanguages";
import { Repos } from "./Repos";
import { memo } from "react";
import { useState } from "react";
import { useEffect } from "react";

export const PopularPage = memo(() => {
    const [selectedLanguage, setSelectedLanguage] = useState("All");
    const [repos, setRepos] = useState(null);
    const [error, setError] = useState(null);

    const selectLanguage = (language) => {
        if (language !== selectedLanguage && repos) {
            setSelectedLanguage(language);
            setRepos(null);

            fetchHandler(language);
        }
    };

    const fetchHandler = (language) => {
        FetchPopularRepos(language)
            .then((data) => {
                setSelectedLanguage(language);
                setRepos(data);
                setError(null);
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    useEffect(() => {
        fetchHandler(selectedLanguage);
    }, []);

    if (error) {
        return <h1>{error}</h1>;
    } else {
        return (
            <div>
                <SelectedLanguages
                    selectedLanguage={selectedLanguage}
                    selectLanguageHandler={selectLanguage}
                />
                <Repos repos={repos} />
            </div>
        );
    }
});
