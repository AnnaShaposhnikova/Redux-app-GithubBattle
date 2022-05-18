import React from "react";
import { memo } from "react";

export const SelectedLanguages = memo(
    ({ selectedLanguage, selectLanguageHandler }) => {
        const languages = [
            "All",
            "JavaScript",
            "Ruby",
            "Java",
            "PHP",
            "Python",
        ];
        return (
            <ul className="languages">
                {languages.map((language, index) => (
                    <li
                        key={index}
                        style={{
                            color:
                                selectedLanguage === language
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
    }
);
