import React, { useState } from 'react';
import { Suggestion } from '../../Models/npm-io';
import { Layout } from '../shared/Layout/Layout';
import { AutoSuggest } from '../ui/Forms/AutoSuggest';
import { SuggestionItem } from './SuggestionItem';

export default function Home() {
    const [value, setvalue] = useState('');
    const [suggestions, setsuggestions] = useState([]);

    // Filter logic
    const getSuggestions = async (value: string) => {
        const inputValue = value.trim().toLowerCase();
        let response = await fetch(`https://api.npms.io/v2/search/suggestions?q=${inputValue}&size=10`);
        let data = await response.json()
        return data;
    };

    // Trigger suggestions
    const getSuggestionValue = (suggestion: Suggestion) => suggestion.package.name;

    // Render Each Option
    const renderSuggestion = (suggestion: Suggestion) => (
        <SuggestionItem
            key={suggestion.package.name}
            description={suggestion.package.description}
            highlight={suggestion.highlight}
            version={suggestion.package.version}
            name={suggestion.package.name}
        />
    );

    // Suggestion rerender when user types
    const onSuggestionsFetchRequested = ({ value }: any) => {
        getSuggestions(value)
            .then(data => {
                if (data.Error) {
                    setsuggestions([])
                } else {
                    setsuggestions(data)
                }
            })
    };

    // Triggered on clear
    const onSuggestionsClearRequested = () => {
        setsuggestions([])

    };

    // OnChange event handler
    const onChange = (event: any, { newValue }: any) => {
        setvalue(newValue);
    };

    // Option props
    const inputProps = {
        placeholder: 'Search...',
        value,
        onChange: onChange,
        className: 'py-4 px-6 w-full focus:outline-none focus:ring-gray-400 focus:ring-1 rounded-full'
    };

    return (
        <Layout>
            <div className="max-w-full mt-8">
                <div className="mx-2 md:mx-32">
                    <AutoSuggest
                        getSuggestionValue={getSuggestionValue}
                        inputProps={inputProps}
                        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                        renderSuggestion={renderSuggestion}
                        suggestions={suggestions}
                        onSuggestionsClearRequested={onSuggestionsClearRequested}
                    />
                </div>
            </div>
        </Layout >
    );
}