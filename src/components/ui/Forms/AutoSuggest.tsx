import React from 'react';
import AutoSuggestExt, { AutosuggestPropsBase } from 'react-autosuggest';

interface Props<T> extends AutosuggestPropsBase<T> {
    suggestions: T[];
}

export const AutoSuggest = <T extends {}>({ getSuggestionValue, inputProps, onSuggestionsFetchRequested, renderSuggestion, suggestions, onSuggestionsClearRequested }: Props<T>) => {
    return (
        <AutoSuggestExt
            suggestions={suggestions}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
        />
    );
}