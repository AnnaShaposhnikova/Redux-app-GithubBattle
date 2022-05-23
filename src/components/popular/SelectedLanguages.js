import React from "react";
import { useSelector } from "react-redux";

export const SelectedLanguages =
    ({selectLanguageHandler }) => {
        const languages = [
            "All",
            "JavaScript",
            "Ruby",
            "Java",
            "PHP",
            "Python",
        ];
        const selectedLanguageFromState = useSelector(state => state.popularReducer.selectedLanguage)
        return (
            <ul className="languages">
                {languages.map((language, index) => (
                    <li
                        key={index}
                        style={{
                            color:
                                selectedLanguageFromState === language
                                    ? "red"
                                    : "#000000",
                        }}
                        onClick={() => selectLanguageHandler(language)}
                    >
                        {language}
                    </li>
                ))}
            </ul>
        );
    };

